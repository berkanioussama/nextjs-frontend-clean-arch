import { IUserRepo } from "@/modules/user/domain/IUser.repo"
import { User, EditUser, UserSchema } from "@/modules/user/domain/user.entity"
export class EditUserUC {
    constructor(private userRepo: IUserRepo) {}

    async execute({ id, user }: EditUser): Promise<User> {

        const validatedUser = UserSchema.safeParse(user)
        if (!validatedUser.success) {
            console.error('Validation failed:', validatedUser.error)
            throw new Error("Invalid user data");
        }
                
        const editedUser = await this.userRepo.edit({ id, user })

        const result = UserSchema.safeParse(editedUser)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}