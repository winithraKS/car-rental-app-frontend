import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {bookItems:BookingItem[]}

const initialState:BookState = {bookItems:[]}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBooking:(state,action:PayloadAction<BookingItem>)=>{
            const remain = state.bookItems.filter((obj)=>(obj.id)!=action.payload.id)

            remain.push(action.payload)
            state.bookItems = remain
        },
        removeBooking:(state,action:PayloadAction<string>)=>{
            const remain = state.bookItems.filter((obj)=>(obj.id)!=action.payload)
            state.bookItems = remain
        }
    }
})

export default bookSlice.reducer
export const {addBooking,removeBooking} = bookSlice.actions