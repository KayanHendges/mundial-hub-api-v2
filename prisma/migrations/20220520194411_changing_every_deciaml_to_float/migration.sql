/*
  Warnings:

  - You are about to alter the column `subtotal` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `taxes` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `discount` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `payment_method_discount` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `discount_coupon` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `total` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `chosen_shipping_value` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `shipping_cost` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `value` on the `orders_finances` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `value` on the `orders_payments` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `cost` on the `orders_products_sold` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `price` on the `orders_products_sold` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `paid_price` on the `orders_products_sold` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `payment_method` VARCHAR(191) NULL,
    MODIFY `subtotal` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `taxes` DOUBLE NULL DEFAULT 0,
    MODIFY `discount` DOUBLE NULL DEFAULT 0,
    MODIFY `payment_method_discount` DOUBLE NULL DEFAULT 0,
    MODIFY `discount_coupon` DOUBLE NULL DEFAULT 0,
    MODIFY `total` DOUBLE NOT NULL,
    MODIFY `chosen_shipping_value` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `shipping_cost` DOUBLE NULL;

-- AlterTable
ALTER TABLE `orders_finances` MODIFY `value` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `orders_payments` MODIFY `value` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `orders_products_sold` MODIFY `cost` DOUBLE NULL,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `paid_price` DOUBLE NOT NULL;
