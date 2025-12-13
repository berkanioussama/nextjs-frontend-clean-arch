import { IUserAuthProviderRepo } from "@/modules/user/domain/IUser-authProvider.repo"
import { User, UserSchema } from "@/modules/user/domain/user.entity"

export class FindUserByAuthProviderIdUC {
    constructor( private readonly userAuthProviderRepo: IUserAuthProviderRepo ) {}

    async execute(authProviderId: string): Promise<User> {
        const user = await this.userAuthProviderRepo.findById(authProviderId);
        
        const result = UserSchema.safeParse(user)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}