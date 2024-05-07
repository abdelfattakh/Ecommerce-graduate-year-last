import { Router } from "express";
import { app } from ".";
import type { UserService } from "../../../domain/services/users_service";
import {
  getUserHandler,
  loginUserHandler,
  registerUserHandler,
} from "../../api/users";

export const registerUserRoutes = (userService: UserService) => {
  const userRouter = Router();

  userRouter.post("/register", registerUserHandler(userService));
  userRouter.post("/login", loginUserHandler(userService));
  userRouter.get("/user", getUserHandler(userService));
  userRouter.get("/logout");

  app.use("/api/auth", userRouter);
};
