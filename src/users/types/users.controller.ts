import { IsIn, IsString } from 'class-validator';
import { ROLES_ENUM } from 'src/roles/roles.constants';

export class SetRoleBody {
  @IsString()
  @IsIn(Object.values(ROLES_ENUM))
  role: ROLES_ENUM;
}
