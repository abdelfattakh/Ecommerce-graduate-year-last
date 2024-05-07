import { users } from "../../infrastructure/db/schemas/user";

export type User = typeof users.$inferSelect;
