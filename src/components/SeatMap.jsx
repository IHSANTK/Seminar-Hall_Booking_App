import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Seat from './Seat';
import BookingForm from './BookingForm';
import './SeatMap.css';

const SeatMap = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seats, setSeats] = useState([]);
  

  useEffect(() => {
    const initialSeats = Array.from({ length: 30 }, (_, i) => ({
      number: i + 1,
    }));
    setSeats(initialSeats);
  }, []);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const bookings = useSelector((state) => state.bookings);
  const selectedDate = useSelector((state) => state.selectedDate);

  const renderSeats = () => {
    return seats.map((seat) => {
      const isBooked = bookings.some(
        (booking) => booking.seat === seat.number && booking.date === selectedDate
      );
      return (
        <Seat
          key={seat.number}
          number={seat.number}
          isSelected={selectedSeat === seat.number}
          isBooked={isBooked}
          onClick={() => handleSeatClick(seat.number)}
        />
      );
    });
  };

  return (
    <div>
      <div className="seat-map">{renderSeats()}</div>
      <BookingForm selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
    </div>
  );
};

export default SeatMap;