'use client'

import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function TopMenu() {
    const router = useRouter()
    const {data:session} = useSession()

    return (
        <div className='h-12 fixed bg-slate-50 flex z-30 inset-0 w-full flex-row'>
            <Image src={'/img/logo.jpg'} onClick={()=>router.replace('/')} className='h-full w-auto' alt='logo' width={0} height={0} sizes="100vh"/>
            <div className='flex flex-row w-1/2'>
                <TopMenuItem title='Select Car' pageRef='/car'/>
                <TopMenuItem title='Reservations' pageRef='/reservations'></TopMenuItem>
                <TopMenuItem title='About' pageRef='/about'></TopMenuItem>
            </div>
            <div className='w-1/2 flex flex-row-reverse'>
                {
                session? <TopMenuItem title='Sign-out' pageRef='/api/auth/signout'/>
                :<TopMenuItem title='Sign-in' pageRef='/api/auth/signin'/>
                }
                <TopMenuItem title='Register' pageRef='/register'/>
                <TopMenuItem title='Cart' pageRef='/cart'/>
            </div>
        </div>
    );
}