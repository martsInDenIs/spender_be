import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestEntity } from 'src/types/typeORM/entities/request.entity';
import {
  CreateArguments,
  GetArguments,
  UpdateArguments,
} from './types/requests.service';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestEntity)
    private requestRepository: Repository<RequestEntity>,
  ) {}

  get(conditions: GetArguments = {}) {
    return this.requestRepository.find({
      ...conditions,
    });
  }
  getById(id: RequestEntity['id']) {
    return this.requestRepository.findOneBy({ id });
  }

  create(payload: CreateArguments) {
    return this.requestRepository.save(payload);
  }

  update({ id, payload }: UpdateArguments) {
    return this.requestRepository.update(id, payload);
  }
}
