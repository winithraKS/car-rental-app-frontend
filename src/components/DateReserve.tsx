'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve({onDateChange}:{onDateChange:Function}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(value)=>onDateChange(value)}/>
        </LocalizationProvider>
    );
}