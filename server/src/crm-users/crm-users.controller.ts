import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CrmUser } from '@prisma/client';
import { AtGuard } from '../auth/auth.guard';
import { CrmUsersService } from './crm-users.service';

@Controller('crm-users')
export class CrmUsersController {
  constructor(private crmUsersService: CrmUsersService) {}

  @UseGuards(AtGuard)
  @Post('create')
  async createCrmUser(@Body() req: Omit<CrmUser, 'id'>) {
    return this.crmUsersService.createCrmUser(req);
  }

  @UseGuards(AtGuard)
  @Get('list')
  async getList() {
    return this.crmUsersService.getCrmUsers();
  }
}
