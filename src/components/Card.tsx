'use client'

import { useState } from 'react'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'

export default function Card({hospitalName,imgSrc,changeRating} : {hospitalName:string,imgSrc:string,changeRating?:Function}) {
    const [rate,setRate] = useState<number | null>(0);
    
    return(
        <InteractiveCard>
            <div className='w-full h-[65%] relative'>
                <Image className='rounded-t-lg' src={imgSrc} fill={true} alt="hospital" objectFit='cover'/>
            </div>
            <div className='w-full h-[20%] text-black p-2 text-center'>
                {hospitalName}
            </div>
            {
            changeRating? <Rating className='m-2' name={hospitalName + ' Rating'} id={hospitalName + ' Rating'} data-testid={hospitalName + ' Rating'} value={rate}
            onClick={(e)=>{e.stopPropagation()}}
            onChange={(event, newValue) => {setRate(newValue); changeRating(hospitalName,newValue==null?0:newValue)}}/>:''
            }
        </InteractiveCard>
    )
}