/*
  Warnings:

  - Added the required column `photo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Album` MODIFY `photoUrl` LONGBLOB NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `photo` LONGBLOB NOT NULL;
