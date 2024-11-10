'use client'

import LacationDateReserve from "@/components/LoactionDateReserve";
import { AppDispatch } from "@/redux/store";
import { Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReservationItem } from "../../../interface";
import { addReservation } from "@/redux/features/cartSlice";

export default function Reservations() {

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const model = urlParams.get('model')

    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)
    const [pickupLocation,setPickupLocation] = useState<string|null>(null)
    const [returnDate,setReturnDate] = useState<Dayjs|null>(null)
    const [returnLocation,setReturnLocation] = useState<string|null>(null)

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = ()=>{

        if(cid&&model&&pickupDate&&returnDate&&pickupLocation&&returnLocation) {
            const reservation : ReservationItem = {
            carID:cid,
            carModel:model,
            numOfDays:returnDate.diff(pickupDate,'day'),
            pickupDate:dayjs(pickupDate).format('YYYY/MM/DD'),
            pickupLocation: pickupLocation,
            returnDate:dayjs(returnDate).format('YYYY/MM/DD'),
            returnLocation: returnLocation
            }

            dispatch(addReservation(reservation))
        }

        else if(!cid) alert('please select car! \n(click Select Car in top menu)')
        else if(!pickupDate || !pickupLocation) alert('please select pickup date and location!')
        else if(!returnDate || !returnLocation) alert('please select return date and location!')
    }

    return(
        <main className='w-[100%] flex flex-col bg-purple-50 m-3 rounded-xl items-center space-y-4'>
            <div className='text-xl text-center font-medium rounded-t bg-violet-200 w-full p-2'>New Reservation</div>
            <div className="text-lg font-medium flex flex-row">{model? `Car ${model}`:'No Car Selected!'}</div>
            <div className="bg-slate-500 w-fit space-y-2 p-2 rounded-lg">
                <p className="text-center text-white">Pickup date and location</p>
                <LacationDateReserve onDateChange={(value:Dayjs)=>setPickupDate(value)} onLocationChange={(value:string)=>setPickupLocation(value)}/>
                
            </div>
            <div className="bg-slate-500 w-fit space-y-2 p-2 rounded-lg">
                <p className="text-center text-white">Return date and location</p>
                <LacationDateReserve onDateChange={(value:Dayjs)=>setReturnDate(value)} onLocationChange={(value:string)=>setReturnLocation(value)}/>
            </div>
            <Button className='block rounded-md bg-sky-600 text-black px-3 py-2 hover:bg-sky-500' onClick={makeReservation}>Make Reservation</Button>
        </main>
    );
}