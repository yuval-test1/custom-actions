import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
