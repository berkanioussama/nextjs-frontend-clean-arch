'use server'

import { api } from "@/shared/infrastructure/api"
import { User } from "@/modules/user/domain/user.entity"

export async function findByAuthProviderIdAction(id: string): Promise<User> {
    const instance = await api()
    const res = await instance.get(`/users/authProvider/${id}`)
    if (res.data.status === 'error') {
        throw new Error(res.data.error)
    }
    return res.data.data
}