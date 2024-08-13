import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateBody } from './types/requests.controller';
import { RequestEntity } from 'src/types/typeORM/entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestEntity)
    private requestRepository: Repository<RequestEntity>,
  ) {}

  get(conditions?: FindManyOptions<RequestEntity>['where']) {
    return this.requestRepository.find({
      where: conditions,
    });
  }
  getById(id: RequestEntity['id']) {
    return this.requestRepository.findOneBy({ id });
  }

  create(payload: CreateBody) {
    return this.requestRepository.save(payload);
  }

  update(id: RequestEntity['id'], payload: Partial<RequestEntity>) {
    return this.requestRepository.update(id, payload);
  }
}
