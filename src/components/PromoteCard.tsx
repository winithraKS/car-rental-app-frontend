'use client'

import { useWindowListener } from "@/hooks/useWindowListener";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function PromoteCard() {
    const [playing,setPlaying] = useState(true)

    useWindowListener("contextmenu",(e)=>{e.preventDefault()})

    return(
        <div className="flex flex-rox w-4/5 h-3/5 my-10 mx-[10%] p-4 rounded-lg bg-gray-200">
            <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing}/>
            <div className="flex flex-col px-4 space-y-2">
                <text>Get your vaccine today</text>
                <button onClick={()=>setPlaying(!playing)}className="border border-cyan-700 h-[40px] w-[80px] rounded-lg bg-slate-100 text-cyan-700 font-medium hover:bg-cyan-600 hover:text-white">{playing? "Pause":"Play"}</button>
            </div>
        </div>
    )
}