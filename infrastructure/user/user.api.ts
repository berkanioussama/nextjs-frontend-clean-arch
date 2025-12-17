'use server'

import { api } from "@/infrastructure/shared/api"
import { EditUser, FindUser } from "@/domain/user/user.entity"
import { ApiResponse } from "@/infrastructure/shared/api-response"

export async function editApi({ userId, user }: EditUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.put(`/users/${userId}`, user)
    return res.data
}

export async function findByIdApi({userId}: FindUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/${userId}`)
    return res.data
}