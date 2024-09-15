import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EnvironmentVariables } from './app-config.validation';

@Injectable()
export class AppConfigService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables, true>,
  ) {}

  private getKey<K extends keyof EnvironmentVariables>(key: K) {
    return this.configService.get<EnvironmentVariables[K]>(key);
  }

  get app() {
    return {
      port: this.getKey('APP_PORT'),
      env: this.getKey('APP_ENV'),
      prefix: this.getKey('APP_PREFIX'),
    };
  }

  get db() {
    return {
      url: join(process.cwd(), this.getKey('DB_URL')),
    };
  }
}
