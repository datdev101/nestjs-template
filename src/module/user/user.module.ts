import { Module } from '@nestjs/common';
import { DbModule } from 'src/core/db/db.module';
import { RepoModule } from 'src/core/repository/repository.module';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  imports: [DbModule, RepoModule],
})
export class UserModule {}
