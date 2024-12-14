import { Module } from '@nestjs/common';
import { AppConfigModule } from './core/app-config/app-config.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [AppConfigModule, UserModule],
})
export class AppModule {}
