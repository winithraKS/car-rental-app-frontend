'use client'

import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function TopMenu() {

    const router = useRouter()
    const {data:session} = useSession()

    return (
        <div className="flex flex-row inset-0 h-12 absolute fixed z-30 bg-sky-200 border-y-white">
            <div className="flex flex-row w-1/2">
                {session? <TopMenuItem title='Sign-Out' pageRef="/api/auth/signout"/> 
                :<TopMenuItem title='Sign-In' pageRef="/api/auth/signin"/>}
                <TopMenuItem title='My Booking' pageRef="/mybooking"/>
            </div>
            <div className="flex flex-row-reverse w-1/2">
                <Image src='/img/logo.png' onClick={()=>router.push('/')} className="h-full w-auto" width={0} height={0} sizes="100vh" alt='logo'/>
                <TopMenuItem title='Booking' pageRef="/booking"/>
                <TopMenuItem title='Hospital' pageRef="/hospital"/>
            </div>
        </div>
    );
}