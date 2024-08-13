import { Injectable, PipeTransform } from '@nestjs/common';
import { In, Like } from 'typeorm';

@Injectable()
export class TransformTypeORMSearchConditionsPipe<T = Record<string, unknown>>
  implements PipeTransform
{
  transform(value: T) {
    return Object.entries(value).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        return { ...acc, [key]: In(value) };
      }

      if (typeof value === 'string') {
        return { ...acc, [key]: Like(value) };
      }

      return {
        ...acc,
        [key]: value,
      };
    }, {});
  }
}
