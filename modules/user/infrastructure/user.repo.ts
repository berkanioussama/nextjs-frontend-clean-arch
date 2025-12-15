import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { User, EditUser } from "@/modules/user/domain/user.entity";
import { editApi, findByIdApi } from "./users.api";

export class UserRepo implements IUserRepo {
    constructor() {}

    async edit({ id, user }: EditUser): Promise<User> {
        try {
            const res = await editApi({ id, user })
            if (res.status === 'error') {  
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to edit user')
        }
    }
    
    async findById(id: string): Promise<User> {
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

}