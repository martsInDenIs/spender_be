import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { ROLE_COOKIE_KEY, ROLES_ENUM } from 'src/roles/roles.constants';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    private roleService: RolesService,
    private jwtService: JwtService,
  ) {}

  setRole(res: Response, roleName: ROLES_ENUM) {
    res.cookie(
      ROLE_COOKIE_KEY,
      this.jwtService.sign({ role: this.roleService.getRoleByName(roleName) }),
    );
  }
}
