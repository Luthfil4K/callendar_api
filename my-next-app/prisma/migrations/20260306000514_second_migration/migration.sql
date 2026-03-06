-- CreateTable
CREATE TABLE `tbl_queue_digital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueNumber` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'CALLED', 'DONE', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `clearStatus` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date` DATETIME(3) NOT NULL,
    `dailyQueueNumber` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_jenis_layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenisLayanan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_queue_layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueId` INTEGER NOT NULL,
    `jenisLayananId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_notification_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueId` INTEGER NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `clearStatus` INTEGER NOT NULL,
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
ALTER TABLE `tbl_queue_layanan` ADD CONSTRAINT `tbl_queue_layanan_queueId_fkey` FOREIGN KEY (`queueId`) REFERENCES `tbl_queue_digital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_queue_layanan` ADD CONSTRAINT `tbl_queue_layanan_jenisLayananId_fkey` FOREIGN KEY (`jenisLayananId`) REFERENCES `tbl_jenis_layanan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_notification_log` ADD CONSTRAINT `tbl_notification_log_queueId_fkey` FOREIGN KEY (`queueId`) REFERENCES `tbl_queue_digital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
