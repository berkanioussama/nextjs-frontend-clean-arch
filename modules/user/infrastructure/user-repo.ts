import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { User, EditUser } from "@/modules/user/domain/user.entity";
import { editAction, findByIdAction } from "./users.actions";

export class UserRepo implements IUserRepo {
    constructor() {}

    async edit({ id, user }: EditUser): Promise<User> {
        try {
            return await editAction({ id, user })
        } catch (error) {
            throw new Error('Failed to edit user')
        }
    }
    
    async findById(id: string): Promise<User> {
        try {
            return await findByIdAction(id)
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }

}