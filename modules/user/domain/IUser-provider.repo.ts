import { User, FindUserByProvider } from "@/modules/user/domain/user.entity";

export interface IUserProviderRepo {
    findById(providerId: FindUserByProvider): Promise<User>
    findProfileById(providerId: FindUserByProvider): Promise<void>
}