import { User, EditUser, FindUser } from "@/domain/user/user.entity";

export interface IUserRepo {
  edit({userId, user}: EditUser): Promise<User>
  findById({userId}: FindUser): Promise<User>
}