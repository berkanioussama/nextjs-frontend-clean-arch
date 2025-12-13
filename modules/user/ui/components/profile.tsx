import Image from "next/image";
import { Button } from "@/shared/ui/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { User } from "@/modules/user/domain/user.entity";
import Link from "next/link";

const Profile = ({user}: {user: User}) => {
    console.log(user.image)
    return ( 
        <>
        <div className="relative rounded-full h-24 aspect-square overflow-hidden border">
            <Image 
                src={user.image} 
                alt={user.name} 
                fill
                className="object-cover"
            />
        </div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Registered At: {user.createdAt.toDateString()}</p>
            <SignOutButton>
                <Button variant="destructive">Log out</Button>
            </SignOutButton>
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </>    
    );
}
 
export default Profile;