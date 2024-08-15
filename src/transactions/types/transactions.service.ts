import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { FindManyOptions } from 'typeorm';

export type GetArguments = {
  conditions: FindManyOptions<TransactionEntity>['where'];
};

export type GetByIdArguments = Pick<TransactionEntity, 'id'>;

export type CreateArguments = Pick<TransactionEntity, 'requestId'>;
