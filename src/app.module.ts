import { ConsoleLogger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [ConfigModule.forRoot(), RequestsModule],
  controllers: [AppController],
  providers: [AppService, ConsoleLogger],
})
export class AppModule {}
