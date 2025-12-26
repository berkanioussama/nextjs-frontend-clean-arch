import { User, EditedUser, FindUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  edit(editedUser: EditedUser): Promise<User>
  findById(id: FindUser): Promise<User>
}