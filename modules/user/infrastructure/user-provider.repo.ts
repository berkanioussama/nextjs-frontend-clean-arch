import { IUserProviderRepo } from "@/modules/user/domain/IUser-provider.repo"
import { User, FindUserByProvider } from "@/modules/user/domain/user.entity"
import { findByProviderIdApi, findProfileByProviderIdApi } from "@/modules/user/infrastructure/user-provider.api"

export class UserAuthProviderRepo implements IUserProviderRepo {
    constructor() {}
    
    async findById({userProviderId}: FindUserByProvider): Promise<User> {
        try {
            const res = await findByProviderIdApi({userProviderId})
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }
    async findProfileById({userProviderId}: FindUserByProvider): Promise<any> {
        try {
            const res = await findProfileByProviderIdApi({userProviderId});
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error("Failed to find user profile");
        }
    }
}