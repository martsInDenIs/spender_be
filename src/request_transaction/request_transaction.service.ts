import { Injectable } from '@nestjs/common';
import { RequestEntity } from 'src/types/typeORM/entities/request.entity';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class RequestTransactionService {
  constructor(private dataSource: DataSource) {}

  async createTransaction(requestId: number) {
    return this.dataSource.transaction(async (entityManager) => {
      await entityManager.update(RequestEntity, requestId, { executed: true });
      await entityManager.save(TransactionEntity, { data: { requestId } });
    });
  }
}
