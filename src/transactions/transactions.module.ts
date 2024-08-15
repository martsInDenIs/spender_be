import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { RequestTransactionModule } from 'src/request_transaction/request_transaction.module';

@Module({
  imports: [
    RequestTransactionModule,
    TypeOrmModule.forFeature([TransactionEntity]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
