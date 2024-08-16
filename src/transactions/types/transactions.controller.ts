import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { TransactionEntity } from 'src/types/typeORM/entities/transaction.entity';

export class GetQuery implements Omit<TransactionEntity, 'request'> {
  @IsOptional()
  @IsInt()
  @Min(1)
  id: number;

  @IsOptional()
  @IsDate()
  date: Date;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  @Min(1)
  requestId: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  relations: string[];
}

export type GetByIdArguments = TransactionEntity['id'];

export class CreatePayload {
  @IsInt()
  @Min(1)
  requestId: number;
}
