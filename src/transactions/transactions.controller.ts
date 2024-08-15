import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { StrictValidationTransformPipe } from 'src/pipes/strict.validation.transform';
import { FindManyOptions } from 'typeorm';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';
import { CreatePayload, GetQuery } from './types/transactions.controller';
import { TransformTypeORMSearchConditionsPipe } from 'src/pipes/transform.typeORM.search.conditions';
import { RequestTransactionService } from 'src/request_transaction/request_transaction.service';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private service: TransactionsService,
    private requestTransactionService: RequestTransactionService,
  ) {}

  @Get()
  get(
    @Query(
      new StrictValidationTransformPipe(GetQuery),
      TransformTypeORMSearchConditionsPipe,
    )
    conditions: FindManyOptions<TransactionEntity>['where'],
  ) {
    return this.service.get({ conditions });
  }

  @Get(':id')
  @UsePipes(StrictValidationTransformPipe)
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post('new')
  @UsePipes(StrictValidationTransformPipe)
  create(@Body() payload: CreatePayload) {
    return this.requestTransactionService.createTransaction(payload.requestId);
  }
}
