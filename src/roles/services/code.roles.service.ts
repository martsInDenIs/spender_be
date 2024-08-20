import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from './roles.service';
import { ROLES_ENUM } from '../roles.constants';
import { JwtRolePayload } from '../roles.types';

@Injectable()
export class CodeRolesService {
  constructor(
    private roleService: RolesService,
    private jwtService: JwtService,
  ) {}

  encodeRole(roleName: ROLES_ENUM) {
    return this.jwtService.sign({
      role: this.roleService.getRoleByName(roleName),
    });
  }

  verifyToken(roleToken: string) {
    return this.jwtService.verify<JwtRolePayload>(roleToken);
  }
}
