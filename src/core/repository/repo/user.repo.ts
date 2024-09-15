import { Injectable } from '@nestjs/common';
import { DbService } from 'src/core/db/db.service';
import { User } from 'src/core/db/db.types';

@Injectable()
export class UserRepo {
  constructor(private readonly db: DbService) {}

  getOneByField(
    dto: { field: 'email'; value: string } | { field: 'id'; value: number },
  ) {
    const fieldMapper: Record<typeof dto.field, keyof User> = {
      email: 'email',
      id: 'id',
    };

    return this.db.dummy
      .selectFrom('User')
      .selectAll()
      .where(fieldMapper[dto.field], '=', dto.value)
      .compile();
  }
}
