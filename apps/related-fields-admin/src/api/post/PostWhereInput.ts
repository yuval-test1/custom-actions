import { StringFilter } from "../../util/StringFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  author?: AuthorWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
