import { IUserRepo } from "@/modules/user/domain/IUser.repo"
import { User, UserSchema } from "@/modules/user/domain/user.entity"

export class FindUserByIdUC {
    constructor( private readonly userRepo: IUserRepo ) {}

    async execute(id: string): Promise<User> {
        const user = await this.userRepo.findById(id);
        
        const result = UserSchema.safeParse(user)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}