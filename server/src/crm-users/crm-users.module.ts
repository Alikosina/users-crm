import { Module } from '@nestjs/common';
import { CrmUsersService } from './crm-users.service';
import { CrmUsersController } from './crm-users.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  providers: [CrmUsersService, PrismaService],
  controllers: [CrmUsersController],
})
export class CrmUsersModule {}
