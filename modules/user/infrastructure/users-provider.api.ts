'use server'

import { api } from "@/shared/infrastructure/api"
import { ApiResponse } from "@/shared/infrastructure/api-response"
import { FindUserByProvider } from "@/modules/user/domain/user.entity"

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