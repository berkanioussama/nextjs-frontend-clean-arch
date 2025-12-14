import { useQuery } from "@tanstack/react-query"
import { UserAuthProviderRepo } from "@/modules/user/infrastructure/user-authProvider.repo"
import { FindUserByAuthProviderIdUC } from "@/modules/user/application/query/find-user-by-authProviderId.uc";

export function useFindUserByAuthProviderId(id: string) {

    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            
            const repo = new UserAuthProviderRepo()
            const findUserByIdUC = new FindUserByAuthProviderIdUC(repo)
            return await findUserByIdUC.execute(id)
        },
        enabled: Boolean(id),
        staleTime: 1000 * 60,
    })
}