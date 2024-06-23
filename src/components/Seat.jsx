import React from 'react';


const Seat = ({ number, isSelected, isBooked, onClick }) => {
  return (
    <div
      className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
      onClick={!isBooked ? onClick : null}
    >
      {number}
    </div>
  );
};

export default Seat;