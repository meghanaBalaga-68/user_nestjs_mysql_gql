import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt';
import { LocalStrategy } from './local';
import { jwtConstants } from './jwt.constants';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from 'src/guard/role.guard';


@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy, {provide: APP_GUARD, useClass: RoleGuard,},],
  exports: [AuthService],
})
export class AuthModule {}

