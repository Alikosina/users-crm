import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CrmUser } from '@prisma/client';
import { CrmUsersService } from './crm-users.service';

@Controller('crm-users')
export class CrmUsersController {
  constructor(private crmUsersService: CrmUsersService) {}

  @Post('create')
  async createCrmUser(@Body() req: Omit<CrmUser, 'id'>) {
    return this.crmUsersService.createCrmUser(req);
  }

  @Get('list')
  async getList() {
    return this.crmUsersService.getCrmUsers();
  }
}
