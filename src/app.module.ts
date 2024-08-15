import { ConsoleLogger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestsModule } from './requests/requests.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipesModule } from './pipes/pipes.module';
import { RequestEntity } from './types/typeORM/entities/request.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionEntity } from './types/typeORM/entities/transaction.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.getOrThrow('DATABASE_HOST'),
        port: +config.getOrThrow('DATABASE_PORT'),
        username: config.getOrThrow('DATABASE_USERNAME'),
        password: config.getOrThrow('DATABASE_PASSWORD'),
        database: config.getOrThrow('DATABASE_NAME'),
        entities: [RequestEntity, TransactionEntity],
        synchronize: !config.get('DATABASE_SYNC'),
      }),
    }),
    PipesModule,
    RequestsModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConsoleLogger],
})
export class AppModule {}
