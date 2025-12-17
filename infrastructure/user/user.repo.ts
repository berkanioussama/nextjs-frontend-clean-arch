import { IUserRepo } from "@/domain/user/IUser.repo";
import { User, EditUser, FindUser } from "@/domain/user/user.entity";
import { editApi, findByIdApi } from "@/infrastructure/user/users.api";

export class UserRepo implements IUserRepo {
    constructor() {}

    async edit({ userId, user }: EditUser): Promise<User> {
        try {
            const res = await editApi({ userId, user })
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to edit user')
        }
    }
    
    async findById({userId}: FindUser): Promise<User> {
        try {
            const res = await findByIdApi({userId})
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }

}