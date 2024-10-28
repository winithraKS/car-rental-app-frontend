'use client'

import VlogPlayer from "./VlogPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"
import useWindowListener from "@/hooks/useWindowListener"

export default function TravelCard() {
    const [playing,setPlayer] = useState(true)
    const [rating,setRating] = useState(0)
    const [pointPosition,setPointerPosition] = useState({x:0,y:0})

    useWindowListener("pointermove",(e)=>{
        setPointerPosition({x:(e as PointerEvent).clientX,y:(e as PointerEvent).clientY})
    })

    return(
        <div className="w-4/5 shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-rox">
            <VlogPlayer vdoSrc="/video/Sunrise.mp4" isPlaying={playing}/>
            <div className="flex flex-col px-4 py-2">
                <p>Thailand Nature</p>
                <div>(x: {pointPosition.x}, y: {pointPosition.y})</div>
                <button onClick={()=>setPlayer(!playing)} className="h-[40px] my-2 w-[80px] border-violet-500 border border-2 rounded-lg bg-violet-200 hover:bg-violet-500 hover:text-white">{playing? 'pause':'play'}</button>
                <Rating value={rating} onChange={(e,newValue)=> {if(newValue!=null) setRating(newValue)}}/>
            </div>
        </div>
    )
}