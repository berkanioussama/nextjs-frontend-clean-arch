import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { NewUser, User, EditUser } from "@/modules/user/domain/user.entity";
import { api } from "@/shared/infrastructure/api";

export class UserRepo implements IUserRepo {
    constructor(private token: string) {
        if (!token) throw new Error("No authentication token provided")
    }

    async edit({ id, user }: EditUser): Promise<User> {
        try {
            const instance = await api(this.token)
            const res = await instance.put(`/users/${id}`, user)
            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }

            return res.data.data
        } catch (error) {
            throw new Error('Failed to update user')
        }
    }
    
    async findById(id: string): Promise<User> {
        try {
            const instance = await api(this.token)
            const res = await instance.get(`/users/${id}`)
            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }

            return res.data.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }

}