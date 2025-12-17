
import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/infrastructure/user/user.repo"
import { FindUserByIdUC } from "@/application/user/query/find-user-by-id.uc"
import { FindUser } from "@/domain/user/user.entity"

export function useFindUserById({userId}: FindUser) {

    return useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {

            const repo = new UserRepo()
            const findUserByIdUC = new FindUserByIdUC(repo)
            return await findUserByIdUC.execute({userId})
        },
        enabled: Boolean(userId),
        staleTime: 1000 * 60,
    })
}