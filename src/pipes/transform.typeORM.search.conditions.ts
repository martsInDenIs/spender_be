import { Injectable, PipeTransform } from '@nestjs/common';
import { FindManyOptions, In, Like } from 'typeorm';

@Injectable()
export class TransformTypeORMSearchConditionsPipe implements PipeTransform {
  transform(value: Record<string, unknown>): FindManyOptions {
    return Object.entries(value).reduce((acc, [key, value]) => {
      if (key === 'relations') {
        return {
          ...acc,
          [key]: Array.isArray(value)
            ? value.reduce(
                (acc, relationName) => ({ ...acc, [relationName]: true }),
                {},
              )
            : { [`${value}`]: true },
        };
      }

      return {
        ...acc,
        where: {
          ...acc['where'],
          [key]: Array.isArray(value)
            ? In(value)
            : typeof value === 'string'
              ? Like(value)
              : value,
        },
      };
    }, {});
  }
}
