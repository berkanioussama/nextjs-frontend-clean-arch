'use client'
import { IUserRepo } from "@/modules/user/domain/IUser.repo"
import { User, EditedUser, UserSchema, EditedUserSchema } from "@/modules/user/domain/user.entity"
export class EditUserUC {
    constructor(private userRepo: IUserRepo) {}

    async execute(editedUser: EditedUser): Promise<User> {

        const validatedUser = EditedUserSchema.safeParse(editedUser)
        if (!validatedUser.success) {
            console.error('Validation failed:', validatedUser.error)
            throw new Error("Invalid user data");
        }
                
        const updatedUser = await this.userRepo.edit(editedUser);

        const result = UserSchema.safeParse(updatedUser);
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}