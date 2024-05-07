import type { ToUserView } from "../../domain/dto/users";
import type { User } from "../../domain/models/users";

export const toUser = ({
  email,
  firstName,
  lastName,
  phone,
  role,
  id = 1,
}: User): ToUserView => ({
  email,
  firstName,
  lastName,
  phone,
  role,
  id,
});
