'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CarSelect() {
    const [car, setCar] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCar(event.target.value as string);
    };

    return (
        <Box sx={{ maxWidth: 200, minWidth: 120 }} className='mt-6'>
            <FormControl fullWidth>
                <InputLabel>Car</InputLabel>
                <Select value={car} label="Car" onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
