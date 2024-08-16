import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { RequestTransactionService } from './request_transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  controllers: [TransactionsController],
  providers: [TransactionsService, RequestTransactionService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
