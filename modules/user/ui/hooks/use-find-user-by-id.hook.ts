'use client'
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user-repo"
import { FindUserByIdUC } from "@/modules/user/application/query/find-user-by-id.uc"

export function useFindUserById(id: string) {
    const { getToken } = useAuth();

    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("No authentication token")
            
            const repo = new UserRepo(token)
            const findUserByIdUC = new FindUserByIdUC(repo)
            return await findUserByIdUC.execute(id)
        },
        enabled: Boolean(id),
        staleTime: 1000 * 60,
    })
}