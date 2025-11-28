/*
  Warnings:

  - You are about to drop the `dailyreset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificationlog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `queue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `notificationlog` DROP FOREIGN KEY `NotificationLog_queueId_fkey`;

-- DropTable
DROP TABLE `dailyreset`;

-- DropTable
DROP TABLE `notificationlog`;

-- DropTable
DROP TABLE `queue`;

-- CreateTable
CREATE TABLE `tbl_queue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueNumber` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'CALLED', 'DONE', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_notification_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueId` INTEGER NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `status` ENUM('SENT', 'FAILED') NOT NULL DEFAULT 'SENT',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_daily_reset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `lastNumber` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tbl_daily_reset_date_key`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_notification_log` ADD CONSTRAINT `tbl_notification_log_queueId_fkey` FOREIGN KEY (`queueId`) REFERENCES `tbl_queue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
