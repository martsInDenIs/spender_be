import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  HttpCode,
} from '@nestjs/common';
import { RequestsService } from './requests.service';
import { StrictValidationPipe } from 'src/pipes/strict.validation';
import { TransformTypeORMSearchConditionsPipe } from 'src/pipes/transform.typeORM.search.conditions';
import { FindManyOptions } from 'typeorm';
import {
  CreatePayload,
  GetQuery,
  UpdatePayload,
} from './types/requests.controller';
import { StrictValidationTransformPipe } from 'src/pipes/strict.validation.transform';
import { RequestEntity } from 'src/types/typeORM/entities/request.entity';

@Controller('requests')
export class RequestsController {
  constructor(private service: RequestsService) {}

  @Get()
  get(
    @Query(
      new StrictValidationPipe(GetQuery),
      TransformTypeORMSearchConditionsPipe,
    )
    query: FindManyOptions<RequestEntity>,
  ) {
    return this.service.get({ ...query });
  }

  @Get(':id')
  @UsePipes(StrictValidationTransformPipe)
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post('new')
  @UsePipes(StrictValidationTransformPipe)
  create(@Body() payload: CreatePayload) {
    return this.service.create(payload);
  }

  @Patch('update/:id')
  @UsePipes(StrictValidationTransformPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Body() payload: UpdatePayload, @Param('id') id: number) {
    return this.service.update({ id, payload });
  }
}
