
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditUser } from "@/modules/user/domain/user.entity";
import { EditUserUC } from "@/modules/user/application/command/edit-user.uc";
import { UserRepo } from "@/modules/user/infrastructure/user.repo";

export const useEditUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({id, user}: EditUser) => {

            const userRepo = new UserRepo()
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