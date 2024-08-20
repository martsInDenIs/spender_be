import { Module } from '@nestjs/common';
import { HasRoleGuard } from './guards/hasRole/has.role.guard';
import { RolesService } from './services/roles.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CodeRolesService } from './services/code.roles.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.getOrThrow('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [HasRoleGuard, RolesService, CodeRolesService],
  exports: [HasRoleGuard, RolesService, CodeRolesService],
})
export class RolesModule {}
