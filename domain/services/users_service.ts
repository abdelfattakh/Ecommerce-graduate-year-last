import type { InsertUserDTO } from "../dto/users";
import { UserRepository } from "../repository/users_repo";
import type { UserServiceOperations } from "./types";

export class UserService implements UserServiceOperations {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async registerUser(user: InsertUserDTO) {
    const createdUser = await this.userRepo.create(user);

    return createdUser;
  }

  async loginUser(email: string, password: string) {
    const retrievedUser = await this.userRepo.loginUser(email, password);

    return retrievedUser;
  }

  async getUser(id: number) {
    const user = await this.userRepo.get(id);

    return user;
  }
  async updateUser(userInfo: InsertUserDTO) {
    const user = await this.userRepo.update(userInfo);

    return user;
  }
}
