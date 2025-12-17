import { IUserProviderRepo } from "@/domain/user/IUser-provider.repo"
import { User, UserSchema, FindUserByProvider } from "@/domain/user/user.entity"

export class FindUserByProviderIdUC {
    constructor( private readonly userProviderRepo: IUserProviderRepo ) {}

    async execute({userProviderId}: FindUserByProvider): Promise<User> {
        const user = await this.userProviderRepo.findById({userProviderId});
        
        const result = UserSchema.safeParse(user)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}