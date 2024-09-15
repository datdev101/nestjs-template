import { Injectable } from '@nestjs/common';
import { DbService } from 'src/core/db/db.service';
import { UserRepo } from 'src/core/repository/repo/user.repo';
import { RepoService } from 'src/core/repository/repository.service';

@Injectable()
export class UserService {
  constructor(
    private readonly db: DbService,
    private readonly repo: RepoService,
  ) {}

  async getOneByField(dto: Parameters<UserRepo['getOneByField']>['0']) {
    return this.db
      .executeQuery(this.repo.user.getOneByField(dto))
      .then(({ rows }) => rows);
  }
}
