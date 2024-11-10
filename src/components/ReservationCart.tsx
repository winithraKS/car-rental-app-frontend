'use client'

import { AppDispatch, useAppSelector } from "@/redux/store";
import { ReservationItem } from "../../interface";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { removeReservation } from "@/redux/features/cartSlice";

export default function ReservationCart() {
    
    const carItems = useAppSelector((state)=>state.cartSlice.carItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        <p className="text-center font-bold text-2xl p-8">Here your Cart</p>
        {
            (carItems.length==0)? <p className="text-center">N/A</p>:
            carItems.map((item:ReservationItem)=>(
                <div className="rounded bg-slate-200 px-5 mx-5 py-2 my-2" key={item.carID}>
                    <div className="text-xl">{item.carModel}</div>
                    <div className="text-sm">Pick-up {item.pickupDate} from {item.pickupLocation}</div>
                    <div className="text-sm">Return {item.returnDate} from {item.returnLocation}</div>
                    <div className="text-md">duration {item.numOfDays} days</div>
                    <Button onClick={()=>dispatch(removeReservation(item))} variant='contained'>Remove reservation</Button>
                </div>
            ))
        }
        </>
    )
}