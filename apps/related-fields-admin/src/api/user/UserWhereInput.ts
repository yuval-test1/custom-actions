import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuthorListRelationFilter } from "../author/AuthorListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  authors?: AuthorListRelationFilter;
  posts?: PostListRelationFilter;
};
