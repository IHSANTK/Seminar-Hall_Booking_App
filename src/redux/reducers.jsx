import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  bookings: [],
  selectedDate: new Date().toDateString(),
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      console.log(state);
      state.bookings.push(action.payload);
      
      toast.success(`Seat #${action.payload.seat} ${action.payload.name} successfully booked!`);
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { bookSeat, setSelectedDate } = bookingSlice.actions;
export default bookingSlice.reducer;