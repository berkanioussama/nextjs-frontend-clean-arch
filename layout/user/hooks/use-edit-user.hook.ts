
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditUser } from "@/domain/user/user.entity";
import { EditUserUC } from "@/application/user/command/edit-user.uc";
import { UserRepo } from "@/infrastructure/user/user.repo";

export const useEditUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({userId, user}: EditUser) => {

            const userRepo = new UserRepo()
            const editUserUC = new EditUserUC(userRepo)

            return editUserUC.execute({userId, user})
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error) => {
            console.error(error);
        }
    })
}