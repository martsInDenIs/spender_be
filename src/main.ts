import { NestFactory } from '@nestjs/core';
import { ConsoleLogger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(app.get(ConfigService).getOrThrow('APP_PORT')).then(() => {
    app.get(ConsoleLogger).log('App is listening on port 3000!');
  });
}
bootstrap();
