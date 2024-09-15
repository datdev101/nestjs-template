import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger, setAppPrefix } from './app.setup';
import { AppConfigService } from './core/app-config/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfigService);

  setAppPrefix(app, appConfig.app.prefix);
  await initSwagger(app, appConfig.app.prefix);

  await app.listen(appConfig.app.port);
}

bootstrap();
