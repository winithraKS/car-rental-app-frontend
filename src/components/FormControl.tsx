'use client'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateReserve from '@/components/DateReserve';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addBooking } from '@/redux/features/bookSlice';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Form() {
    const [name,setName] = useState<string>('')
    const [surname,setSurname] = useState<string>('')
    const [id,setId] = useState<string>('')
    const [hospital,setHospital] = useState<string>('')
    const [bookDate,setBookDate] = useState<Dayjs|null>(null)

    const dispatch = useDispatch<AppDispatch>()

    const urlParams = useSearchParams()
    const hospitalName = urlParams.get('hospital')

    const {data:session} = useSession()
    
    React.useEffect(()=>{
        if(hospitalName) setHospital(hospitalName)
        if(session) setName(session.user.name)
    },[hospitalName])

    const makeBooking = ()=>{
        if(name&&surname&&id&&hospital&&bookDate) {
            const bookingItem:BookingItem = {
                name:name,
                surname:surname,
                id:id,
                hospital:hospital,
                bookDate:dayjs(bookDate).format('YYYY/MM/DD')
            }

            dispatch(addBooking(bookingItem))
        }
    }

    return (
        <FormControl variant="standard" className='bg-sky-100 space-y-5 rounded-xl border-solid border-2 border-sky-400 min-w-80' sx={{m: 2,p:3}}>
            <TextField variant="standard" name="Name" label="Name" value={name} onChange={e=>setName(e.target.value)}/> 
            <TextField variant='standard' name='Lastname' label="Lastname" onChange={e=>setSurname(e.target.value)}/>
            <TextField variant="standard" name="Citizen ID" label="Citizen ID" onChange={e=>setId(e.target.value)}/> 
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Hospital</InputLabel>
                <Select id="hospital" variant="standard" label="hospital" value={hospital} 
                onChange={e=>setHospital(e.target.value as string)}>
                    <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                    <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
                </Select>
            </FormControl>
            <DateReserve onDateChange={(value:Dayjs)=>setBookDate(value)}/>
            <Button className='border-2 hover:border-sky-600 hover:border-2' 
            variant='outlined' name='Book Vaccine' onClick={makeBooking}>Book Vaccine</Button>
        </FormControl>
    )
}