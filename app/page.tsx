'use client'
import Page from "@/shared/presentation/components/layout/page";
import Container from "@/shared/presentation/components/layout/container";
import { Button } from "@/shared/presentation/components/ui/button";
import Link from "next/link";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import { fadeUp } from "@/shared/presentation/lib/animations";

export default function Home() {

  const { user } = useUser();

  return (
    <Page>
      <Container className="min-h-svh flex flex-col gap-6 items-center justify-center">
        <motion.h1 
          className="text-4xl font-bold"
          {...fadeUp()}
        >
          Home Page
        </motion.h1>
        <motion.p className="text-lg" {...fadeUp(0.2)}>
          You can see this page without logging in
        </motion.p>
        {!user && (
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        )}
        {user && (
          <>
            <Link href="/profile"><Button>Go to profile</Button></Link>
            <SignOutButton><Button variant="destructive">Log out</Button></SignOutButton>
          </>
        )}
      </Container>
    </Page>
  );
}
