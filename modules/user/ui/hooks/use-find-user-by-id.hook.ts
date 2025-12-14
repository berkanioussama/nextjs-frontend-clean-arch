
import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user-repo"
import { FindUserByIdUC } from "@/modules/user/application/query/find-user-by-id.uc"

export function useFindUserById(id: string) {

    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {

            const repo = new UserRepo()
            const findUserByIdUC = new FindUserByIdUC(repo)
            return await findUserByIdUC.execute(id)
        },
        enabled: Boolean(id),
        staleTime: 1000 * 60,
    })
}