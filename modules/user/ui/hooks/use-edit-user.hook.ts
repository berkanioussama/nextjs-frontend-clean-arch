'use client'
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditUser } from "@/modules/user/domain/user.entity";
import { EditUserUC } from "@/modules/user/application/command/edit-user.uc";
import { UserRepo } from "@/modules/user/infrastructure/user-repo";

export const useEditUser = () => {
    const { getToken } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({id, user}: EditUser) => {
            const token = await getToken()
            if (!token) throw new Error('No authentication token')

            const userRepo = new UserRepo(token)
            const editUserUC = new EditUserUC(userRepo)

            return editUserUC.execute({id, user})
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error) => {
            console.error(error);
        }
    })
}