"use client";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { ProfileSkeleton } from "@/components/skeletons/profileskeleton";
import { formatPrice } from "@/utils/format-price";

export default function Profile() {
    const { data: session, status, update } = useSession();
    const user = session?.user;
    console.log(user);

    const pp = user?.pp ? `${siteConfig.links.url}${user?.pp}` : `${siteConfig.links.url}/pp/default.svg`; 
    const alt = user?.name ? `${user.name}'s profile photo` : "user can not found!"; 

    if (status === "loading") return <ProfileSkeleton />

    return (
        <>
        {user ?
            <div className="flex items-center gap-2">
                <div className="relative size-10">
                    <Image
                        src={pp}
                        alt={alt}
                        fill
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="leading-4">{user.name}</p>
                    <p className="leading-4 text-sm text-gray-400">{formatPrice(user.balance)} &#8378;</p>
                </div>
            </div> :
            <Button onClick={()=>signIn()}>sign in</Button>}
        </>
    );
}