import { Injectable } from '@nestjs/common';
import * as SQLite from 'better-sqlite3';
import {
  Compilable,
  CompiledQuery,
  DummyDriver,
  Kysely,
  QueryResult,
  SqliteAdapter,
  SqliteDialect,
  SqliteIntrospector,
  SqliteQueryCompiler,
} from 'kysely';
import { QueryId } from 'kysely/dist/cjs/util/query-id';
import { AppConfigService } from 'src/core/app-config/app-config.service';
import { DB } from './db.types';

@Injectable()
export class DbService {
  readonly primary: DbType;
  readonly dummy: DbType;

  constructor(private readonly appConfig: AppConfigService) {
    this.primary = this.initService({
      mode: 'hot',
      uri: appConfig.db.url,
    });
    this.dummy = this.initService({
      mode: 'cold',
    });
  }

  private initService(dto: { mode: 'hot'; uri: string } | { mode: 'cold' }) {
    if (dto.mode === 'cold') {
      return new DbType({
        dialect: {
          createAdapter: () => new SqliteAdapter(),
          createDriver: () => new DummyDriver(),
          createIntrospector: (db) => new SqliteIntrospector(db),
          createQueryCompiler: () => new SqliteQueryCompiler(),
        },
      });
    }

    return new DbType({
      dialect: new SqliteDialect({
        database: new SQLite(dto.uri),
      }),
    });
  }

  executeQuery<R>(
    query: CompiledQuery<R> | Compilable<R>,
    queryId?: QueryId,
  ): Promise<QueryResult<R>> {
    return this.primary.executeQuery(query, queryId);
  }
}

class DbType extends Kysely<DB> {}
