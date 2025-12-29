'use client'
import { IUserRepo } from "@/modules/user/domain/IUser.repo"
import { User, UserSchema, FindUserByProvider } from "@/modules/user/domain/user.entity"

export class FindUserByProviderIdUC {
    constructor( private readonly userRepo: IUserRepo ) {}

    async execute(providerId: FindUserByProvider): Promise<User> {
        const user = await this.userRepo.findByProviderId(providerId);
        
        const result = UserSchema.safeParse(user)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}