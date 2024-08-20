import { NestFactory } from '@nestjs/core';
import { ConsoleLogger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const port = app.get(ConfigService).getOrThrow('APP_PORT');

  await app.listen(port).then(() => {
    app.get(ConsoleLogger).log(`App is listening on port ${port}!`);
  });
}
bootstrap();
