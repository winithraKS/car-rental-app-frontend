'use client'

import { useReducer } from "react";
import Card from "./Card";
import { hostname } from "os";
import Link from "next/link";

export default function CardPanel() {

    const ratingReducer = (ratingList:Map<string,number>,action:{type:string,hosName:string,rating:number}) => {
        switch(action.type) {
            case 'add' : {
                ratingList.set(action.hosName,action.rating)
                return new Map(ratingList)
            }
            case 'delete' : {
                ratingList.delete(action.hosName)
                return new Map(ratingList)
            }
            default : return ratingList
        }
    }

    const mockHospitalInfo = [
        {hid:'001',name:"Chulalongkorn Hospital",imgSrc:'/img/chula.jpg'},
        {hid:'002',name:"Rajavithi Hospital",imgSrc:'/img/rajavithi.jpg'},
        {hid:'003',name:"Thammasat University Hospital",imgSrc:'/img/thammasat.jpg'}
    ]

    const [ratingList,dispatchRate] = useReducer(ratingReducer,new Map<string,number>([['Chulalongkorn Hospital',0],['Rajavithi Hospital',0],['Thammasat University Hospital',0]]))
    
    return(
        <div>
            <div className='flex flex-row flex-wrap justify-center'>
                {
                    mockHospitalInfo.map((hospital)=>(
                        <Link href={`/hospital/${hospital.hid}`}>
                            <Card hospitalName={hospital.name} imgSrc={hospital.imgSrc} changeRating={(name:string,rate:number)=>dispatchRate({type:'add',hosName:name,rating:rate})}/>
                        </Link>
                    ))
                }
            </div>
            <div className='text-black px-8 py-2 font-extrabold'>Hospital List with Ratings : {ratingList.size} </div>
            {Array.from(ratingList).map(([key,value]) => <div className="px-10 py-1 text-black" data-testid={key} key={key} onClick={()=>dispatchRate({type:'delete',hosName:key,rating:0})}>{key} : {value}</div>)}
        </div>
    );
}