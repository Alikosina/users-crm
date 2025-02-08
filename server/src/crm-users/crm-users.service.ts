import { Injectable } from '@nestjs/common';
import { CrmUser } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CrmUsersService {
  constructor(private prisma: PrismaService) {}

  async createCrmUser(data: Omit<CrmUser, 'id'>) {
    try {
      const crmUser = await this.prisma.crmUser.create({
        data,
      });

      return crmUser;
    } catch (error) {
      throw error;
    }
  }

  async getCrmUsers() {
    try {
      const crmUsers = await this.prisma.crmUser.findMany();

      return crmUsers;
    } catch (error) {
      throw error;
    }
  }
}
