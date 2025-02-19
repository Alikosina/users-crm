import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CrmUsersService } from './crm-users.service';
import { CrmUser } from './types';

@Controller('crm-users')
export class CrmUsersController {
  constructor(private crmUsersService: CrmUsersService) {}

  @Post('create')
  async createCrmUser(
    @Body() req: Omit<CrmUser, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return this.crmUsersService.createCrmUser(req);
  }

  @Get('list')
  async getList() {
    return this.crmUsersService.getCrmUsers();
  }

  @Get(':id')
  async getItem(@Param('id') id: string) {
    return this.crmUsersService.getCrmUserById(Number(id));
  }

  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() req: Partial<CrmUser>) {
    return this.crmUsersService.updateCrmUser({
      id: Number(id),
      data: req,
    });
  }
}
