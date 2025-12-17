import { User, FindUserByProvider } from "@/domain/user/user.entity";

export interface IUserProviderRepo {
    findById({userProviderId}: FindUserByProvider): Promise<User>
    findProfileById({userProviderId}: FindUserByProvider): Promise<void>
}