import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ATStrategy } from './strategies/at.strategy';
import { RTStrategy } from './strategies';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  providers: [AuthService, ATStrategy, RTStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
