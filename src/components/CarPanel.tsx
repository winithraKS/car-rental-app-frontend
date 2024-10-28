'use client'

import ProductCard from "./productCard";
import { useReducer, useState } from "react";
import Link from "next/link";
import { useRef,useEffect } from "react";
import getCars from "@/libs/getCars";
import { CarItem, CarJson } from "../../inteface";

export default function CarPanel() {
    const [carResponse,setCarResponse] = useState<CarJson|null>(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const cars = await getCars()
            setCarResponse(cars)
        }
        fetchData()
    },[])

    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const compareReducer = (compareLists:Set<string>,action:{type:string,carName:string}) => {
        switch(action.type) {
            case 'add' : return new Set(compareLists.add(action.carName))
            case 'delete' : {
                compareLists.delete(action.carName)
                return new Set(compareLists)
            }
            default : return compareLists
        }
    }

    const [compareList,dispatchCompare] = useReducer(compareReducer,new Set<string>())

    const mockCarRepo = [
        {cid:'001',name:'Honda Civic',image:'/img/civic.jpg'},
        {cid:'002',name:'Honda Accord',image:'/img/accord.jpeg'},
        {cid:'003',name:'Totyota Fortuner',image:'/img/fortuner.png'},
        {cid:'004',name:'Tesla Model 3',image:'/img/tesla.png'}
    ]

    if(!carResponse) return(<p>Car Panel is loading...</p>)

    return (
        <div>
            <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap",justifyContent:"space-around",margin:"15px",padding:"15px"}}>
               {
                carResponse.data.map((carItem:CarItem) => (
                    <Link href={`/car/${carItem._id}`} key={`c${carItem._id}`}>
                        <ProductCard carName={carItem.model} imgSrc={carItem.picture} onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}/>
                    </Link>
                ))
               } 
            </div>
            <div className="text-black m-3">Compare List : {compareList.size} </div>
            {Array.from(compareList).map((car) => <div onClick={()=>dispatchCompare({type:'delete',carName:car})} className="px-4 text-black" key={car}>{car}</div>)}
            <button className="border border-black rounded p-1 mx-2" onClick={()=>{countRef.current++; alert(countRef.current)}}>click me</button>
            <input type='text' placeholder="please fill" className="text-gray-900 text-sm rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400
            border border-red-600 border-0 focus:outline-none focus:bg-purple-200 focus:ring-2"
            ref={inputRef}/>
            <button className="border border-black rounded p-1 mx-2" onClick={()=> {if(inputRef.current!=null) inputRef.current.focus()}}>focus</button>
        </div>
    );
}