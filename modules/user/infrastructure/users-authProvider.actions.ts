'use server'

import { api } from "@/shared/infrastructure/api"
import { User } from "@/modules/user/domain/user.entity"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function findByAuthProviderIdAction(id: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/authProvider/${id}`)
    return res.data
}