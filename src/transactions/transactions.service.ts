import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { Repository } from 'typeorm';
import { GetByIdArguments } from './types/transactions.controller';
import { GetArguments } from './types/transactions.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
  ) {}

  async get({ where, relations }: GetArguments) {
    return this.transactionRepository.find({
      where,
      relations,
    });
  }

  getById(id: GetByIdArguments) {
    return this.transactionRepository.findOneBy({ id });
  }
}
