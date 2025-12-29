'use client'
import { useQuery } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user.repo";
import { FindUserByProviderIdUC } from "@/modules/user/application/find-user-by-provider-id.uc";
import { FindUserByProvider } from "@/modules/user/domain/user.entity";

export function useFindUserByProviderId(providerId: FindUserByProvider) {

    return useQuery({
        queryKey: ['user', providerId],
        queryFn: async () => {
            
            const repo = new UserRepo()
            const findUserByProviderIdUC = new FindUserByProviderIdUC(repo)
            return await findUserByProviderIdUC.execute(providerId)
        },
        enabled: Boolean(providerId),
        staleTime: 1000 * 60,
    })
}