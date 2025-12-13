import { IUserAuthProviderRepo } from "../domain/IUser-authProvider.repo"
import { User } from "@/modules/user/domain/user.entity"
import { api } from "@/shared/infrastructure/api"

export class UserAuthProviderRepo implements IUserAuthProviderRepo {
    constructor(private token: string) {
        if (!token) throw new Error("No authenticationtoken provided")
    }

    async findById(id: string): Promise<User> {
        const instance = await api(this.token)
        const res = await instance.get(`/users/authProvider/${id}`)
        if (res.data.status === 'error') {
            throw new Error(res.data.error)
        }
        return res.data.data
    }
    async findProfileById(id: string): Promise<void> {
        const instance = await api(this.token)
        const res = await instance.get(`/users/authProvider/${id}/profile`)
        if (res.data.status === 'error') {
            throw new Error(res.data.error)
        }
        return res.data.data
    }
}