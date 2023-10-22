import { Author } from "../author/Author";
import { User } from "../user/User";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author?: Author | null;
  user?: User | null;
};
