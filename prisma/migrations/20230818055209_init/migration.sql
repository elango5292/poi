/*
  Warnings:

  - Added the required column `title` to the `Innovations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Innovations" ADD COLUMN     "title" TEXT NOT NULL;
