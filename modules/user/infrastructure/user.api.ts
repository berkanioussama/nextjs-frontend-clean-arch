'use server'

import { api } from "@/shared/infrastructure/api"
import { EditUser, FindUser } from "@/modules/user/domain/user.entity"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function editApi({ userId, editUser }: EditUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.put(`/users/${userId}`, editUser)
    return res.data
}

export async function findByIdApi({userId}: FindUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/${userId}`)
    return res.data
}