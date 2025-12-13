import { User, EditUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  edit({id, user}: EditUser): Promise<User>
  findById(id: string): Promise<User>
}