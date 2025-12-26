import Image from "next/image";
import { Button } from "@/shared/presentation/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { User } from "@/modules/user/domain/user.entity";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/shared/presentation/lib/animations";

const Profile = ({user}: {user: User}) => {
    return ( 
        <motion.div {...fadeUp()} className="flex flex-col gap-5 items-center justify-center">
        <div className="relative rounded-full h-32 aspect-square overflow-hidden border-2">
            <Image 
                src={user.image} 
                alt={user.name} 
                fill
                className="object-cover"
            />
        </div>
            <p className="text-2xl font-bold">{user.name}</p>
            <p>{user.email}</p>
            <p>Role: {user.role}</p>
            <p>Registered At: {user.createdAt.toDateString()}</p>
            <Link href="/profile/edit">
                <Button>Edit profile</Button>
            </Link>
            <SignOutButton>
                <Button variant="destructive">Log out</Button>
            </SignOutButton>
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </motion.div>    
    );
}
 
export default Profile;