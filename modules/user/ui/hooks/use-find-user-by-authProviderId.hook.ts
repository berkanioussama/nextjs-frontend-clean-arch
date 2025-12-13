'use client'
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import { UserAuthProviderRepo } from "@/modules/user/infrastructure/user-authProvider.repo"
import { FindUserByAuthProviderIdUC } from "@/modules/user/application/query/find-user-by-authProviderId.uc";

export function useFindUserByAuthProviderId(id: string) {
    const { getToken } = useAuth();

    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("No authentication token")
            
            const repo = new UserAuthProviderRepo(token)
            const findUserByIdUC = new FindUserByAuthProviderIdUC(repo)
            return await findUserByIdUC.execute(id)
        },
        enabled: Boolean(id),
        staleTime: 1000 * 60,
    })
}