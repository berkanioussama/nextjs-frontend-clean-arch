'use server'

import { api } from "@/infrastructure/shared/api"
import { ApiResponse } from "@/infrastructure/shared/api-response"
import { FindUserByProvider } from "@/domain/user/user.entity"

export async function findByProviderIdApi({userProviderId}: FindUserByProvider): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/provider/${userProviderId}`)
    return res.data
}

export async function findProfileByProviderIdApi({userProviderId}: FindUserByProvider): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/provider/${userProviderId}/profile`)
    return res.data
}