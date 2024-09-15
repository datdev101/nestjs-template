import { Module } from '@nestjs/common';
import { DbModule } from 'src/core/db/db.module';
import { UserRepo } from './repo/user.repo';
import { RepoService } from './repository.service';

@Module({
  providers: [UserRepo, RepoService],
  imports: [DbModule],
  exports: [RepoService],
})
export class RepoModule {}
