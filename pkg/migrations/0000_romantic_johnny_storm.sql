CREATE TABLE `category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category_name` varchar(40) NOT NULL,
	`preview_image_link` text NOT NULL,
	CONSTRAINT `category_id` PRIMARY KEY(`id`),
	CONSTRAINT `category_category_name_unique` UNIQUE(`category_name`)
);
--> statement-breakpoint
CREATE TABLE `product-meta` (
	`id` int AUTO_INCREMENT NOT NULL,
	`productId` int NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL,
	CONSTRAINT `product-meta_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_name` varchar(50) NOT NULL,
	`description` varchar(256) NOT NULL,
	`first_price` decimal NOT NULL,
	`current_price` decimal NOT NULL,
	`discount` int,
	`preview_image_link` text,
	`rating` decimal,
	`category_id` int,
	CONSTRAINT `products_id` PRIMARY KEY(`id`),
	CONSTRAINT `products_product_name_unique` UNIQUE(`product_name`)
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`rating` int,
	`review_text` text,
	`is_verified` boolean DEFAULT false,
	`user_name` text NOT NULL,
	`user_id` int NOT NULL,
	`product_id` int NOT NULL,
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`password` text NOT NULL,
	`phone` varchar(12) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`email` varchar(40) NOT NULL,
	`role` text DEFAULT ('customer'),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_phone_unique` UNIQUE(`phone`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `product-meta` ADD CONSTRAINT `product-meta_productId_products_id_fk` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_product_id_products_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE no action ON UPDATE no action;