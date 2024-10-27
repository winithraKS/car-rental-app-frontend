'use client'

import { useEffect } from "react"
import { useRef } from "react"

export default function VideoPlayer({vdoSrc,isPlaying}:{vdoSrc:string,isPlaying:boolean}) {
    const videoRef = useRef<HTMLVideoElement>(null)
    
    useEffect(()=>{
        if(isPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    },[isPlaying])
    
    return(
        <video className="rounded-lg w-3/5"src={vdoSrc} ref={videoRef} controls loop muted/>
    )
}