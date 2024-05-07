import type { Config } from "drizzle-kit";

export default {
  schema: "./infrastructure/db/schemas/*",
  out: "./pkg/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: "127.0.0.1",
    database: "handmade",
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
  },
} satisfies Config;
