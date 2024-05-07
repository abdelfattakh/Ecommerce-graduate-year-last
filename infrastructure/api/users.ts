import {
  userLoginRequestSchema,
  userRegisterRequestSchema,
} from "../validation/users";
import type { UserService } from "../../domain/services/users_service";
import { ZodError } from "zod";
import type { Handler } from "express";
import { toUser } from "../../utils/users/toUser";

export const registerUserHandler =
  (userService: UserService): Handler =>
  async (request, response) => {
    try {
      const user = userRegisterRequestSchema.parse(request.body);
      const registeredUser = await userService.registerUser(user);

      //@ts-ignore
      return response.status(200).json(toUser(registeredUser));
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };

export const loginUserHandler =
  (userService: UserService): Handler =>
  async (request, response) => {
    try {
      const loginData = userLoginRequestSchema.parse(request.body);
      const userData = await userService.loginUser(
        loginData.email,
        loginData.password
      );

      return response.status(200).json(toUser(userData));
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };

export const getUserHandler =
  (userService: UserService): Handler =>
  async (request, response) => {
    const userId = request.headers.authorization;

    if (!userId) {
      return response.status(404).json({
        type: "validation error",
        status: "failed",
        message: "user not found",
      });
    }

    const user = await userService.getUser(Number(userId));

    return response.status(200).json(toUser(user));
  };
