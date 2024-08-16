import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { FindManyOptions } from 'typeorm';

export type GetArguments = Pick<
  FindManyOptions<TransactionEntity>,
  'where' | 'relations'
>;

export type GetByIdArguments = Pick<TransactionEntity, 'id'>;
