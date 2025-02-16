import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwttStrategy } from './strategies/jwt.strategy';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  providers: [AuthService, JwttStrategy, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
