import { useQuery } from "@tanstack/react-query"
import { UserAuthProviderRepo } from "@/modules/user/infrastructure/user-provider.repo"
import { FindUserByProviderIdUC } from "@/modules/user/application/find-user-by-provider-id.uc";
import { FindUserByProvider } from "@/modules/user/domain/user.entity";

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