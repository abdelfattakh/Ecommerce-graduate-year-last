import type { MySql2Database } from "drizzle-orm/mysql2";
import type { CrudOperations } from "./types";
import { eq } from "drizzle-orm";
import type { InsertUserDTO } from "../dto/users";

import { users } from "../../infrastructure/db/schemas/user";

export class UserRepository implements CrudOperations<InsertUserDTO> {
  db: MySql2Database<Record<string, never>>;

  constructor(db?: MySql2Database<Record<string, never>>) {
    if (db == null) {
      throw new Error("Syntax error, should pass database instance");
    }

    this.db = db;
  }

  async get(id: number) {
    try {
      const retrievedUser = await this.db
        .select()
        .from(users)
        .where(eq(users.id, id));

      return retrievedUser?.[0];
    } catch (error) {
      throw new Error(`unable to retrieve user, error: ${error}`);
    }
  }

  async create(user: InsertUserDTO) {
    try {
      await this.db.insert(users).values(user);

      return user;
    } catch (error) {
      throw new Error(`unable to add user, error: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      await this.db.delete(users).where(eq(users.id, id));

      return id;
    } catch (error) {
      throw new Error(`unable to delete user, error: ${error}`);
    }
  }

  async update(user: InsertUserDTO) {
    try {
      if (user.id != null) {
        const insertId = await this.db
          .update(users)
          .set(user)
          .where(eq(users.id, user.id));

        const updatedUserId = insertId[0].insertId;

        return this.get(updatedUserId);
      }

      return null;
    } catch (error) {
      throw new Error(`unable to update user, error: ${error}`);
    }
  }

  async getAll() {
    try {
      const result = await this.db.select().from(users);

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve users, error: ${error}`);
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const user = await this.db
        .select()
        .from(users)
        .where(eq(users.email, email));

      const retrievedUser = user[0];
      if (!retrievedUser || retrievedUser.password !== password) {
        throw new Error("Login or password is incorrect");
      }

      return retrievedUser;
    } catch (error) {
      throw new Error(`unable to retrieve user, error: ${error}`);
    }
  }
}
