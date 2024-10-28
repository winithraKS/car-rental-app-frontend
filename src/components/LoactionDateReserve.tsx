'use client'

import { Select, MenuItem} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

export default function LacationDateReserve({onDateChange,onLocationChange}:{onDateChange:Function,onLocationChange:Function}) {

    return(
        <div className='bg-slate-200 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(value)=>onDateChange(value)} className="bg-white"/>
            </LocalizationProvider>
            <Select variant="standard" name="location" id="location" className="h-[2em] w-[200px]" 
            label="hospital" onChange={(value)=>onLocationChange(value.target.value)}>
                <MenuItem value="BKK">Bangkok</MenuItem>
                <MenuItem value="CNX">Chiang Mai</MenuItem>
                <MenuItem value="HKT">Phuket</MenuItem>
            </Select>
        </div>
    );
}