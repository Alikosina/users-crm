import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrmUser } from './types';

@Injectable()
export class CrmUsersService {
  constructor(private prisma: PrismaService) {}

  async createCrmUser(data: Omit<CrmUser, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const createdAt = new Date();
      const crmUser = await this.prisma.crmUser.create({
        data: {
          ...data,
          createdAt,
          updatedAt: createdAt,
        },
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

  async getCrmUserById(id: number): Promise<CrmUser> {
    try {
      const item = await this.prisma.crmUser.findFirst({
        where: {
          id,
        },
      });

      return item;
    } catch (error) {
      throw error;
    }
  }

  async updateCrmuser({
    id,
    data,
  }: {
    id: number;
    data: Partial<CrmUser>;
  }): Promise<CrmUser> {
    try {
      const item = await this.prisma.crmUser.update({
        where: {
          id,
        },
        data,
      });

      return item;
    } catch (error) {
      throw error;
    }
  }

  async deleteCrmUser(id: number): Promise<boolean> {
    try {
      await this.prisma.crmUser.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (error) {
      throw error;
    }
  }
}
