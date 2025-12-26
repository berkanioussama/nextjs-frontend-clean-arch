'use client'
import { IUserProviderRepo } from "@/modules/user/domain/IUser-provider.repo"
import { User, UserSchema, FindUserByProvider } from "@/modules/user/domain/user.entity"

export class FindUserByProviderIdUC {
    constructor( private readonly userProviderRepo: IUserProviderRepo ) {}

    async execute(providerId: FindUserByProvider): Promise<User> {
        const user = await this.userProviderRepo.findById(providerId);
        
        const result = UserSchema.safeParse(user)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}