"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
    return (
        <>
            <Button onClick={()=>signIn()}>sign in</Button>
            <Button onClick={()=>signOut()}>sign out</Button>
        </>
    );
}
