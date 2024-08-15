import { RequestEntity } from 'src/types/typeORM/entities/request.entity';
import { FindManyOptions } from 'typeorm';

export type GetArguments = Partial<{
  conditions: FindManyOptions<RequestEntity>['where'];
}>;

export type CreateArguments = Pick<RequestEntity, 'description' | 'price'>;

export type UpdateArguments = Pick<RequestEntity, 'id'> & {
  payload: Partial<RequestEntity>;
};
