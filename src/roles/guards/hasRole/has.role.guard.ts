import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { NoRole } from './has.role.metadata';
import { RolesService } from 'src/roles/services/roles.service';
import { ROLE_COOKIE_KEY } from 'src/roles/roles.constants';
import { CodeRolesService } from 'src/roles/services/code.roles.service';

@Injectable()
export class HasRoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private codeRoleService: CodeRolesService,
    private service: RolesService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const noRoleFlag = this.reflector.getAllAndOverride(NoRole, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (noRoleFlag) {
      return true;
    }

    const roleList = this.service.getRoles();

    const request = context.switchToHttp().getRequest<Request>();

    const { role } = this.codeRoleService.verifyToken(
      request.cookies?.[ROLE_COOKIE_KEY],
    );

    if (!role || !roleList.includes(role)) {
      return false;
    }

    return true;
  }
}
