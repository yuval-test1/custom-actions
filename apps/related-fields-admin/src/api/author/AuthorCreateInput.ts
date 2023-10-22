import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorCreateInput = {
  posts?: PostCreateNestedManyWithoutAuthorsInput;
  user?: UserWhereUniqueInput | null;
};
