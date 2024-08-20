import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { SetRoleBody } from './types/users.controller';
import { StrictValidationTransformPipe } from 'src/pipes/strict.validation.transform';
import { NoRole } from 'src/roles/guards/hasRole/has.role.metadata';

@NoRole()
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('set-role')
  setRole(
    @Body(StrictValidationTransformPipe) { role }: SetRoleBody,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.service.setRole(res, role);
  }
}
