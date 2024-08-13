import { Global, Module } from '@nestjs/common';
import { TransformTypeORMSearchConditionsPipe } from './transform.typeORM.search.conditions';

@Global()
@Module({
  providers: [TransformTypeORMSearchConditionsPipe],
  exports: [TransformTypeORMSearchConditionsPipe],
})
export class PipesModule {}
