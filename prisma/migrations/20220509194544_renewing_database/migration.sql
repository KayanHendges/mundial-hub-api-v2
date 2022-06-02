-- CreateTable
CREATE TABLE `customers_addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `recipient` VARCHAR(191) NULL,
    `customer_id` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(11) NULL,
    `cnpj` VARCHAR(14) NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `cellphone` VARCHAR(191) NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `customers_name_key`(`name`),
    UNIQUE INDEX `customers_cpf_key`(`cpf`),
    UNIQUE INDEX `customers_cnpj_key`(`cnpj`),
    UNIQUE INDEX `customers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transporters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `external_id` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `ssw` BOOLEAN NOT NULL,
    `tracking_link` VARCHAR(191) NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `transporters_external_id_key`(`external_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_invoices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `cnpj` VARCHAR(14) NULL,
    `number` INTEGER NOT NULL,
    `key` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_finances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `applied` BOOLEAN NOT NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_products_sold` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `tray_id` INTEGER NULL,
    `tray_kit_id` INTEGER NULL,
    `product_id` INTEGER NOT NULL,
    `kit_id` INTEGER NULL,
    `reference` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cost` DECIMAL(65, 30) NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `paid_price` DECIMAL(65, 30) NOT NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `by` VARCHAR(191) NOT NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_marketplaces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `order_id` INTEGER NOT NULL,
    `marketplace_order_id` INTEGER NOT NULL,
    `link` VARCHAR(191) NULL,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `orders_marketplaces_order_id_key`(`order_id`),
    UNIQUE INDEX `orders_marketplaces_marketplace_order_id_key`(`marketplace_order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tray_order_id` INTEGER NULL,
    `store_code` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `subtotal` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `taxes` DECIMAL(65, 30) NULL DEFAULT 0,
    `discount` DECIMAL(65, 30) NULL DEFAULT 0,
    `payment_method_discount` DECIMAL(65, 30) NULL DEFAULT 0,
    `coupon` VARCHAR(191) NULL,
    `discount_coupon` DECIMAL(65, 30) NULL DEFAULT 0,
    `total` DECIMAL(65, 30) NOT NULL,
    `local_sale` VARCHAR(191) NULL,
    `chosen_transporter_id` INTEGER NULL,
    `chosen_shipping_type` VARCHAR(191) NULL,
    `chosen_shipping_value` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `delivery_time_min` INTEGER NULL,
    `delivery_time_max` INTEGER NULL,
    `transporter_id` INTEGER NULL,
    `shipping_cost` DECIMAL(65, 30) NULL,
    `dispatched_date` DATETIME(3) NULL,
    `delivered_date` DATETIME(3) NULL,
    `partner_id` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `paid` BOOLEAN NOT NULL DEFAULT false,
    `modified` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `orders_tray_order_id_key`(`tray_order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `tray_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `api_address` VARCHAR(191) NOT NULL,
    `oauth2_code` VARCHAR(191) NOT NULL,
    `access_token` VARCHAR(191) NULL,
    `refresh_token` VARCHAR(191) NULL,
    `expiration_access_token` DATETIME(3) NULL,
    `expiration_refresh_token` DATETIME(3) NULL,
    `token_activated` DATETIME(3) NULL,
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `stores_tray_id_key`(`tray_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `customers_addresses` ADD CONSTRAINT `customers_addresses_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_payments` ADD CONSTRAINT `orders_payments_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_invoices` ADD CONSTRAINT `orders_invoices_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_finances` ADD CONSTRAINT `orders_finances_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_products_sold` ADD CONSTRAINT `orders_products_sold_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_notes` ADD CONSTRAINT `orders_notes_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_marketplaces` ADD CONSTRAINT `orders_marketplaces_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_transporter_id_fkey` FOREIGN KEY (`transporter_id`) REFERENCES `transporters`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
