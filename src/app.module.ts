import { Module } from '@nestjs/common';
import { AppConfigModule } from './core/app-config/app-config.module';
import { DbModule } from './core/db/db.module';
import { RepoModule } from './core/repository/repository.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [AppConfigModule, DbModule, RepoModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
