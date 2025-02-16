import { Module } from '@nestjs/common';
import { CrmUsersService } from './crm-users.service';
import { CrmUsersController } from './crm-users.controller';

@Module({
  imports: [],
  providers: [CrmUsersService],
  controllers: [CrmUsersController],
})
export class CrmUsersModule {}
