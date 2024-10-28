'use client'

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard({carName, imgSrc,onCompare} : {carName:string , imgSrc:string, onCompare?:Function}) {

    return(
        <InteractiveCard carName={carName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Product Picture' fill={true} objectFit='contain'></Image>
            </div>
            <div className='w-full h-[15%] text-black text-center'>
                {carName}
            </div>
            <div className='flex flex-row h-[15%] justify-around'>
                {
                onCompare? <button className='m-1 py-1 px-2 text-white rounded-md bg-sky-600 hover:bg-indigo-600'
                onClick={(e)=>{e.preventDefault(); onCompare(carName,'add')}}>Compare</button>:''
                }
                {
                onCompare? <button className='m-1 py-1 px-2 text-white rounded-md bg-sky-600 hover:bg-indigo-600'
                onClick={(e)=>{e.preventDefault(); onCompare(carName,'delete')}}>Delete</button>:''
                }
            </div>
        </InteractiveCard>
    );
}