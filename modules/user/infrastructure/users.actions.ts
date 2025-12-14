'use server'

import { api } from "@/shared/infrastructure/api"
import { User, EditUser } from "@/modules/user/domain/user.entity"

export async function editAction({ id, user }: EditUser): Promise<User> {
    const instance = await api()
    const res = await instance.put(`/users/${id}`, user)
    if (res.data.status === 'error') {  
        throw new Error(res.data.error)
    }

    return res.data.data
}

export async function findByIdAction(id:string): Promise<User> {
    const instance = await api()
    const res = await instance.get(`/users/${id}`)
    if (res.data.status === 'error') {
        throw new Error(res.data.error)
    }

    return res.data.data
}