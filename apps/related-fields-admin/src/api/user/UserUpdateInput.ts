import { InputJsonValue } from "../../types";
import { AuthorUpdateManyWithoutUsersInput } from "./AuthorUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  authors?: AuthorUpdateManyWithoutUsersInput;
  posts?: PostUpdateManyWithoutUsersInput;
};
