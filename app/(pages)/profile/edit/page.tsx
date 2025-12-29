'use client'
import Page from "@/shared/presentation/components/layout/page";
import EditUserForm from "@/modules/user/presentation/components/edit-user-form";
import { useUser } from "@clerk/nextjs";
import { useFindUserByProviderId } from "@/modules/user/presentation/hooks/use-find-user-by-provider-id.hook";
import Container from "@/shared/presentation/components/layout/container";
import Link from "next/link";
import { Button } from "@/shared/presentation/components/ui/button";
import { FindUserByProvider, User } from "@/modules/user/domain/user.entity";

const EditProfile = () => {
    const { user } = useUser();
    if (!user) return null;
    
    return ( 
        <Page>
            <Container className="mb-6">
                <h1 className="text-3xl font-bold">Edit Profile Page</h1>
            </Container>

            <EditUserSection providerId={user.id} />

            <Container className="mt-12">
                <Link href="/profile"><Button>Back to profile</Button></Link>
            </Container>
        </Page> 
    );
}
 
export default EditProfile;

export const EditUserSection = (providerId: FindUserByProvider) => {
    const { data: userData, isLoading, error } = useFindUserByProviderId(providerId);

    return (
        <Container>
            {isLoading && <div>Loading...</div>}
            
            {!isLoading && error && <div>Error: {error.message}</div>}
            
            {userData && <EditUserForm user={userData} />}
        </Container>
    )
}