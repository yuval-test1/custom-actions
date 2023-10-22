import { InputJsonValue } from "../../types";
import { AuthorCreateNestedManyWithoutUsersInput } from "./AuthorCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  authors?: AuthorCreateNestedManyWithoutUsersInput;
  posts?: PostCreateNestedManyWithoutUsersInput;
};
