import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorUpdateInput = {
  posts?: PostUpdateManyWithoutAuthorsInput;
  user?: UserWhereUniqueInput | null;
};
