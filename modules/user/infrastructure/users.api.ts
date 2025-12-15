'use server'

import { api } from "@/shared/infrastructure/api"
import { EditUser } from "@/modules/user/domain/user.entity"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function editApi({ id, user }: EditUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.put(`/users/${id}`, user)
    return res.data
}

export async function findByIdApi(id:string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/${id}`)
    return res.data
}