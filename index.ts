import { drizzle } from "drizzle-orm/mysql2";
import { createDbConnection } from "./infrastructure/db";
import { UserRepository } from "./domain/repository/users_repo";
import { UserService } from "./domain/services/users_service";
import { registerUserRoutes } from "./infrastructure/http/routes/users";
import { app } from "./infrastructure/http/routes";
import { CategoryRepository } from "./domain/repository/category_repo";
import { CategoryService } from "./domain/services/category_service";
import { registerCategoryRoutes } from "./infrastructure/http/routes/category";
import { registerProductRoutes } from "./infrastructure/http/routes/products";
import { ProductsService } from "./domain/services/products_service";
import { ProductRepository } from "./domain/repository/product_repo";
import { ProductMetaRepository } from "./domain/repository/products_meta";

async function main() {
  const connection = await createDbConnection({
    host: "127.0.0.1",
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
  });

  const db = drizzle(connection);

  const userRepo = new UserRepository(db);
  const categoryRepo = new CategoryRepository(db);
  const productsRepo = new ProductRepository(db);
  const productMetaRepo = new ProductMetaRepository(db);

  const userService = new UserService(userRepo);
  const categoryService = new CategoryService(categoryRepo);
  const productsService = new ProductsService(productsRepo, productMetaRepo);

  registerUserRoutes(userService);
  registerCategoryRoutes(categoryService);
  registerProductRoutes(productsService);

  app.listen(3000);
}

main();
