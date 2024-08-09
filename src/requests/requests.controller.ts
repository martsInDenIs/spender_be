import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('requests')
export class RequestsController {
  @Get()
  getAll() {
    return 'All requests';
  }

  @Post('new')
  create() {}

  @Patch('update/:id')
  update() {}
}
