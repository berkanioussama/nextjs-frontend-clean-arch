import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { User, EditedUser, FindUser } from "@/modules/user/domain/user.entity";
import { editApi, findByIdApi } from "@/modules/user/infrastructure/user.api";

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

}