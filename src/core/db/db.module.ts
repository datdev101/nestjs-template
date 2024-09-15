import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/core/app-config/app-config.module';
import { DbService } from './db.service';

@Module({
  imports: [AppConfigModule],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
