import { Post } from "../post/Post";
import { User } from "../user/User";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  posts?: Array<Post>;
  user?: User | null;
};
