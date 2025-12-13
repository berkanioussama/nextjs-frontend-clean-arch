'use client';
import Page from "@/shared/ui/components/layout/page";
import Container from "@/shared/ui/components/layout/container";
import { useUser } from "@clerk/nextjs";
import { useFindUserByAuthProviderId } from "@/modules/user/ui/hooks/use-find-user-by-authProviderId.hook";
import Profile from "@/modules/user/ui/components/profile";

const ProfilePage = () => {

    const { user } = useUser();
    if (!user) return null;

    return (
        <Page>
            <ProfileSection id={user.id} />
        </Page>
    );
}
 
export default ProfilePage;

export const ProfileSection = ({id}: {id: string}) => {
    const { data: userData, isLoading, error } = useFindUserByAuthProviderId(id);
    return (
        <Container className="min-h-svh flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-bold">Profile Page</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {userData && <Profile user={userData} />}
        </Container>
    )
}