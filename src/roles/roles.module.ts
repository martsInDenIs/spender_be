import { Module } from '@nestjs/common';
import { HasRoleGuard } from './guards/hasRole/has.role.guard';
import { RolesService } from './roles.service';

@Module({
  providers: [HasRoleGuard, RolesService],
  exports: [HasRoleGuard, RolesService],
})
export class RolesModule {}
