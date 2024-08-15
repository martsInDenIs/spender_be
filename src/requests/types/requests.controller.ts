import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { RequestEntity } from 'src/types/typeORM/entities/request.entity';

export class GetQuery implements Omit<RequestEntity, 'id'> {
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  id: number[];

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsOptional()
  @Transform(({ value }) => {
    return value === 'true' ? true : value === 'false' ? false : value;
  })
  @IsBoolean()
  allowed: boolean;

  @IsOptional()
  @Transform(({ value }) => {
    return value === 'true' ? true : value === 'false' ? false : value;
  })
  @IsBoolean()
  decided: boolean;

  @IsOptional()
  @Transform(({ value }) => {
    return value === 'true' ? true : value === 'false' ? false : value;
  })
  @IsBoolean()
  executed: boolean;
}

export class CreatePayload
  implements Pick<RequestEntity, 'description' | 'price'>
{
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

export class UpdatePayload implements Omit<RequestEntity, 'id'> {
  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsBoolean()
  allowed: boolean;

  @IsOptional()
  @IsBoolean()
  decided: boolean;

  @IsOptional()
  @IsBoolean()
  executed: boolean;
}
