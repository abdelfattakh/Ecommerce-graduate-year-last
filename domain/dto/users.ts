import type { users } from "../../infrastructure/db/schemas/user";
import type { User } from "../models/users";

export type InsertUserDTO = typeof users.$inferInsert;

export type ToUserView = Pick<
  User,
  "email" | "firstName" | "lastName" | "phone" | "role" | "id"
>;
