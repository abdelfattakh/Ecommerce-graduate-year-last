import { migrate } from "drizzle-orm/mysql2/migrator";
import { createDbConnection } from "../../infrastructure/db";
import { drizzle } from "drizzle-orm/mysql2";

const connection = await createDbConnection({
  host: "127.0.0.1",
  database: "handmade",
  user: process.env.DATABASE_USERNAME ?? "",
  password: process.env.DATABASE_PASSWORD ?? "",
  port: Number(process.env.DATABASE_PORT ?? 3306),
});

const db = drizzle(connection);

await migrate(db, {
  migrationsFolder: `${process.cwd()}/pkg/migrations`,
});

await connection.end();
