import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSeat, setSelectedDate } from '../redux/reducers';
import './BookingForm.css';

const BookingForm = ({ selectedSeat, setSelectedSeat }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const selectedDate = useSelector((state) => state.selectedDate);
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    dispatch(setSelectedDate(new Date(e.target.value).toDateString()));
    setSelectedSeat(null);
  };

  const handleSubmit = (e) => {

    console.log("k");
    e.preventDefault();
    if (selectedSeat && name && email) {
      dispatch(bookSeat({ name, email, seat: selectedSeat, date: selectedDate }));
      setName('');
      setEmail('');
      setSelectedSeat(null);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Seat</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="date"
        
        min={today}
        onChange={handleDateChange}
        required
      />
      <button type="submit" disabled={!selectedSeat}>
        Book Seat {selectedSeat ? `#${selectedSeat}` : ''}
      </button>
    </form>
  );
};

export default BookingForm;