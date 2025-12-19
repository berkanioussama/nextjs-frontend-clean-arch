'use client'
import Page from "@/shared/presentation/components/layout/page";
import EditUserForm from "@/modules/user/presentation/components/edit-user-form";
import { useUser } from "@clerk/nextjs";
import { useFindUserByProviderId } from "@/modules/user/presentation/hooks/use-find-user-by-provider-id.hook";
import Container from "@/shared/presentation/components/layout/container";
import Link from "next/link";
import { Button } from "@/shared/presentation/components/ui/button";
import { User } from "@/modules/user/domain/user.entity";

const EditProfile = () => {
    const { user } = useUser();
    if (!user) return null;
    const { data: userData, isLoading, error } = useFindUserByProviderId({userProviderId: user.id});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!userData) return <div>User not found</div>;
    return ( 
        <Page>
            <Container className="mb-6">
                <h1 className="text-3xl font-bold">Edit Profile Page</h1>
                <Link href="/profile"><Button>Back to profile</Button></Link>
            </Container>
            <EditUserSection user={userData} />
        </Page> 
    );
}
 
export default EditProfile;

export const EditUserSection = ({user}: {user: User}) => {
    return (
        <Container>
            <EditUserForm user={user} />
        </Container>
    )
}