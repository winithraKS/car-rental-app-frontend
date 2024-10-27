'use client'

import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export default function BookingList() {
    const bookingItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {(bookingItems.length==0)? <p className="text-center text-xl mt-16">No Vaccine Booking</p> :
        bookingItems.map((item:BookingItem)=>(
            <div className="bg-sky-100 rounded-lg p-4 text-md my-6 mx-10 border-2 border-sky-300 space-y-1" key={item.id}>
                <div>Name : {item.name} {item.surname}</div>
                <div>Citizen ID : {item.id}</div>
                <div>Hospital : {item.hospital}</div>
                <div>Book date : {item.bookDate}</div>
                <Button variant="contained" onClick={()=>dispatch(removeBooking(item.id))}>delete</Button>
            </div>
        ))
        }
        </>
    )
}