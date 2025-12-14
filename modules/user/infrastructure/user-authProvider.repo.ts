import { IUserAuthProviderRepo } from "../domain/IUser-authProvider.repo"
import { User } from "@/modules/user/domain/user.entity"
import { findByAuthProviderIdAction } from "@/modules/user/infrastructure/users-authProvider.actions"

export class UserAuthProviderRepo implements IUserAuthProviderRepo {
    constructor() {}
    
    async findById(id: string): Promise<User> {
        try {
            return await findByAuthProviderIdAction(id)
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }
    findProfileById(userAuthProviderId: string): Promise<void> {
        throw new Error("Method not implemented.")
    }
}