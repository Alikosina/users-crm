import { IsNotEmpty, IsDateString, IsEmail, IsEnum } from 'class-validator';
import { CrmUser as PrismaCrmUser, CrmUserStatus } from '@prisma/client';

export class CrmUser {
  @IsNotEmpty()
  readonly id: number;

  @IsDateString()
  readonly createdAt: Date;

  @IsDateString()
  readonly updatedAt: Date;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  firstName?: string;

  lastName?: string;

  @IsNotEmpty()
  @IsEnum(CrmUserStatus)
  readonly status: CrmUserStatus;
}
