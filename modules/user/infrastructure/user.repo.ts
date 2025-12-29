import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { User, EditedUser, FindUser, FindUserByProvider } from "@/modules/user/domain/user.entity";
import { editApi, findByIdApi, findByProviderIdApi, findProfileByProviderIdApi } from "@/modules/user/infrastructure/user.api";

export class UserRepo implements IUserRepo {
    constructor() {}

    async edit(editedUser: EditedUser): Promise<User> {
        try {
            const res = await editApi(editedUser)
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to edit user')
        }
    }
    
    async findById(id: FindUser): Promise<User> {
        try {
            const res = await findByIdApi(id)
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }

    async findByProviderId(providerId: FindUserByProvider): Promise<User> {
            try {
                const res = await findByProviderIdApi(providerId)
                if (res.status === 'error') {  
                    throw new Error(res.error)
                }
                return res.data
            } catch (error) {
                throw new Error('Failed to find user')
            }
        }
        async findProfileByProviderId(providerId: FindUserByProvider): Promise<any> {
            try {
                const res = await findProfileByProviderIdApi(providerId);
                if (res.status === 'error') {
                    throw new Error(res.error)
                }
                return res.data
            } catch (error) {
                throw new Error("Failed to find user profile");
            }
        }
}