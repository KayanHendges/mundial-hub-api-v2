-- DropForeignKey
ALTER TABLE `orders_finances` DROP FOREIGN KEY `orders_finances_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders_invoices` DROP FOREIGN KEY `orders_invoices_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders_marketplaces` DROP FOREIGN KEY `orders_marketplaces_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders_notes` DROP FOREIGN KEY `orders_notes_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders_payments` DROP FOREIGN KEY `orders_payments_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders_products_sold` DROP FOREIGN KEY `orders_products_sold_order_id_fkey`;

-- AddForeignKey
ALTER TABLE `orders_payments` ADD CONSTRAINT `orders_payments_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_invoices` ADD CONSTRAINT `orders_invoices_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_finances` ADD CONSTRAINT `orders_finances_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_products_sold` ADD CONSTRAINT `orders_products_sold_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_notes` ADD CONSTRAINT `orders_notes_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_marketplaces` ADD CONSTRAINT `orders_marketplaces_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
