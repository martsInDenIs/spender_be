import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from 'src/types/typeORM/entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
