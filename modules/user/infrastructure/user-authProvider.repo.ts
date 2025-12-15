import { IUserAuthProviderRepo } from "../domain/IUser-authProvider.repo"
import { User } from "@/modules/user/domain/user.entity"
import { findByAuthProviderIdApi, findProfileByAuthProviderIdApi } from "@/modules/user/infrastructure/users-authProvider.api"

export class UserAuthProviderRepo implements IUserAuthProviderRepo {
    constructor() {}
    
    async findById(id: string): Promise<User> {
        try {
            const res = await findByAuthProviderIdApi(id)
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }
    async findProfileById(id: string): Promise<any> {
        try {
            const res = await findProfileByAuthProviderIdApi(id);
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error("Failed to find user profile");
        }
    }
}