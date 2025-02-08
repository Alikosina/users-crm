import { Module } from '@nestjs/common';
import { CrmUsersService } from './crm-users.service';
import { CrmUsersController } from './crm-users.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [CrmUsersService, PrismaService],
  controllers: [CrmUsersController],
})
export class CrmUsersModule {}
