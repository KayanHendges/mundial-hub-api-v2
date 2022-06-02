-- AlterTable
ALTER TABLE `orders` ADD COLUMN `billing_address_id` INTEGER NULL,
    ADD COLUMN `shipping_address_id` INTEGER NULL;
