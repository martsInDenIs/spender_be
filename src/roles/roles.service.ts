import { Injectable } from '@nestjs/common';
import { ROLES_ENUM } from './roles.constants';

@Injectable()
export class RolesService {
  private roles: Record<ROLES_ENUM, string> = {
    PARENT: 'PARENT_ROLE',
    CHILD: 'CHILD_ROLE',
  };

  getRoles() {
    return Object.values(this.roles);
  }

  getRoleNames() {
    return Object.keys(this.roles);
  }

  getRoleByName(name: keyof typeof this.roles) {
    return this.roles[name];
  }
}
