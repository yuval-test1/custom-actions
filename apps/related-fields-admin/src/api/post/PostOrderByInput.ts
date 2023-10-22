import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  userId?: SortOrder;
};
