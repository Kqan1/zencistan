-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `phoneNumber` INTEGER NOT NULL,
    `phoneNumberVerified` DATETIME(3) NULL,
    `password` VARCHAR(191) NOT NULL,
    `pp` VARCHAR(191) NOT NULL DEFAULT '/pp/default.svg',
    `banner` VARCHAR(191) NOT NULL DEFAULT '/banner/default.jpg',
    `role` ENUM('ADMIN', 'USER', 'SELLER') NOT NULL DEFAULT 'USER',
    `balance` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
