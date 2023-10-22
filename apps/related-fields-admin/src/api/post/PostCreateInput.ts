import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
