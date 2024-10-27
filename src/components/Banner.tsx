'use client'

import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {

    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()
    const {data:session} = useSession()

    return(
        <div className='block p-2 h-[80vh] w-full relative' onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} alt='cover' objectFit='cover' fill={true} priority></Image>
            <div className='m-8 relative text-center text-black font-serif'>
                <h1 className='text-3xl font-bold'>Vaccine Service Center</h1>
                <h3 className='text-lg font-medium'>บริการฉีดวัคซีนโรคต่าง ๆ ตามสถานพยาบาล</h3>
            </div>
            {session? <div className='absolute right-0 top-0 p-2 font-semibold text-cyan-800'>Welcome {session.user.name}</div> :''}
            <button onClick={(e)=>{e.stopPropagation();router.push('/hospital')}}
            className='absolute bottom-0 right-0 m-4 border border-cyan-700 p-2 px-3 rounded-lg bg-slate-100 text-cyan-700 font-medium hover:bg-cyan-600 hover:text-white'>Select Hospital</button>
        </div>
    );
}