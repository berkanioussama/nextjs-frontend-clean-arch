import Image from "next/image";
import { Button } from "@/shared/presentation/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { User } from "@/modules/user/domain/user.entity";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/shared/presentation/lib/animations";

const Profile = ({user}: {user: User}) => {
    return ( 
        <motion.div {...fadeUp()} className="flex flex-col gap-6 items-center justify-center">
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
        </motion.div>    
    );
}
 
export default Profile;