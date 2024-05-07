const mysql2 = require("mysql2");
const { drizzle } = require("drizzle-orm/mysql2");
const { createDbConnection } = require("./infrastructure/db");
const { UserRepository } = require("./domain/repository/users_repo");
const { UserService } = require("./domain/services/users_service");
const { registerUserRoutes } = require("./infrastructure/http/routes/users");
const { app } = require("./infrastructure/http/routes");
const { CategoryRepository } = require("./domain/repository/category_repo");
const { CategoryService } = require("./domain/services/category_service");
const { registerCategoryRoutes } = require("./infrastructure/http/routes/category");
const { registerProductRoutes } = require("./infrastructure/http/routes/products");
const { ProductsService } = require("./domain/services/products_service");
const { ProductRepository } = require("./domain/repository/product_repo");
const { ProductMetaRepository } = require("./domain/repository/products_meta");

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

