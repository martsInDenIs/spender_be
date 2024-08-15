import { IsDate, IsInt, IsOptional, Min } from 'class-validator';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';

export class GetQuery implements TransactionEntity {
  @IsOptional()
  @IsInt()
  @Min(1)
  id: number;

  @IsOptional()
  @IsDate()
  date: Date;

  @IsOptional()
  @IsInt()
  @Min(1)
  requestId: number;
}

export type GetByIdArguments = TransactionEntity['id'];

export class CreatePayload implements Pick<TransactionEntity, 'requestId'> {
  @IsInt()
  @Min(1)
  requestId: number;
}
