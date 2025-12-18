import { User, FindUserByProvider } from "@/modules/user/domain/user.entity";

export interface IUserProviderRepo {
    findById({userProviderId}: FindUserByProvider): Promise<User>
    findProfileById({userProviderId}: FindUserByProvider): Promise<void>
}