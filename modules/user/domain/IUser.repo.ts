import { User, EditUser, FindUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  edit({userId, user}: EditUser): Promise<User>
  findById({userId}: FindUser): Promise<User>
}