import { useQuery } from "@tanstack/react-query"
import { UserAuthProviderRepo } from "@/infrastructure/user/user-provider.repo"
import { FindUserByProviderIdUC } from "@/application/user/query/find-user-by-providerId.uc";
import { FindUserByProvider } from "@/domain/user/user.entity";

export function useFindUserByProviderId({userProviderId}: FindUserByProvider) {

    return useQuery({
        queryKey: ['user', userProviderId],
        queryFn: async () => {
            
            const repo = new UserAuthProviderRepo()
            const findUserByIdUC = new FindUserByProviderIdUC(repo)
            return await findUserByIdUC.execute({userProviderId})
        },
        enabled: Boolean(userProviderId),
        staleTime: 1000 * 60,
    })
}