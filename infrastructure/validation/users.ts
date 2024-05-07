import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users } from "../db/schemas/user";

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const userRegisterRequestSchema = insertUserSchema.pick({
  firstName: true,
  email: true,
  lastName: true,
  password: true,
  phone: true,
  id: true,
});

export const userLoginRequestSchema = selectUserSchema.pick({
  email: true,
  password: true,
});
