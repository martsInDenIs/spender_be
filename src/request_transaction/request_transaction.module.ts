import { Module } from '@nestjs/common';
import { RequestTransactionService } from './request_transaction.service';

@Module({
  providers: [RequestTransactionService],
  exports: [RequestTransactionService],
})
export class RequestTransactionModule {}
