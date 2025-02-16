import { Module } from '@nestjs/common';
import { CrmUsersService } from './crm-users.service';
import { CrmUsersController } from './crm-users.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

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
