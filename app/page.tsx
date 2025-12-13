'use client'
import Page from "@/shared/ui/components/layout/page";
import Container from "@/shared/ui/components/layout/container";
import { Button } from "@/shared/ui/components/ui/button";
import Link from "next/link";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Home() {

  const { user } = useUser();

  return (
    <Page>
      <Container className="min-h-svh flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <p className="text-lg">You can see this page without logging in</p>
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
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
