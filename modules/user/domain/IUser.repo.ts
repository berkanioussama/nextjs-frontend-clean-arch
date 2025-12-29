import { User, EditedUser, FindUser, FindUserByProvider } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  edit(editedUser: EditedUser): Promise<User>
  findById(id: FindUser): Promise<User>
  findByProviderId(providerId: FindUserByProvider): Promise<User>
  findProfileByProviderId(providerId: FindUserByProvider): Promise<void>
}