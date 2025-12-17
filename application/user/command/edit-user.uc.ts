import { IUserRepo } from "@/domain/user/IUser.repo"
import { User, EditUser, UserSchema } from "@/domain/user/user.entity"
export class EditUserUC {
    constructor(private userRepo: IUserRepo) {}

    async execute({ userId, user }: EditUser): Promise<User> {

        const validatedUser = UserSchema.safeParse(user)
        if (!validatedUser.success) {
            console.error('Validation failed:', validatedUser.error)
            throw new Error("Invalid user data");
        }
                
        const editedUser = await this.userRepo.edit({ userId, user })

        const result = UserSchema.safeParse(editedUser)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}