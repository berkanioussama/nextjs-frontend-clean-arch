'use client';
import Page from "@/shared/presentation/components/layout/page";
import Container from "@/shared/presentation/components/layout/container";
import { useUser } from "@clerk/nextjs";
import { useFindUserByProviderId } from "@/modules/user/presentation/hooks/use-find-user-by-provider-id.hook";
import Profile from "@/modules/user/presentation/components/profile";
import { Skeleton } from "@/shared/presentation/components/ui/skeleton";
import { FindUserByProvider } from "@/modules/user/domain/user.entity";
const ProfilePage = () => {

    const { user } = useUser();
    if (!user) return null;

    return (
        <Page>
            <ProfileSection providerId={user.id} />
        </Page>
    );
}
 
export default ProfilePage;

export const ProfileSection = (providerId: FindUserByProvider) => {
    const { data: userData, isLoading, error } = useFindUserByProviderId(providerId);
    return (
        <Container className="min-h-svh flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-bold">Profile Page</h1>
            {isLoading && 
                <div className="flex flex-col items-center gap-6 w-full max-w-md">
                    <Skeleton className="h-24 w-24 rounded-full" />
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-5 w-64" />
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-5 w-32" />
                </div>
            }
            {error && <p className="text-destructive">Error: {error.message}</p>}
            {userData && <Profile user={userData} />}
        </Container>
    )
}