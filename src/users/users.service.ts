import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ROLE_COOKIE_KEY, ROLES_ENUM } from 'src/roles/roles.constants';
import { CodeRolesService } from 'src/roles/services/code.roles.service';

@Injectable()
export class UsersService {
  constructor(private codeRoleService: CodeRolesService) {}

  setRole(res: Response, roleName: ROLES_ENUM) {
    res.cookie(ROLE_COOKIE_KEY, this.codeRoleService.encodeRole(roleName));
  }
}
