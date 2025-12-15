'use server'

import { api } from "@/shared/infrastructure/api"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function findByAuthProviderIdApi(id: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/authProvider/${id}`)
    return res.data
}

export async function findProfileByAuthProviderIdApi(id: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/authProvider/${id}/profile`)
    return res.data
}