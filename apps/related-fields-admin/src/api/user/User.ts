import { JsonValue } from "type-fest";
import { Author } from "../author/Author";
import { Post } from "../post/Post";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  authors?: Array<Author>;
  posts?: Array<Post>;
};
