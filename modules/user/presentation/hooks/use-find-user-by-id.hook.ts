'use client'
import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user.repo"
import { FindUserByIdUC } from "@/modules/user/application/find-user-by-id.uc"
import { FindUser } from "@/modules/user/domain/user.entity"

export function useFindUserById(id: FindUser) {

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