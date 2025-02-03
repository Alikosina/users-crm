/*
  Warnings:

  - Added the required column `status` to the `CrmUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CrmUserStatus" AS ENUM ('NEW', 'COMPLETED', 'DELETED');

-- AlterTable
ALTER TABLE "CrmUser" ADD COLUMN     "status" "CrmUserStatus" NOT NULL;
