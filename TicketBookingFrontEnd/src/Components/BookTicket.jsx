import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const BookTicket = ({ bus, onClose }) => {
  const [bookedDate, setBookedDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector((state) => state.user.user);

  const handleBooking = async () => {
    const ticketData = {
      user: { id: user.id }, // Replace with actual logged-in user ID
      bus: { id: bus.id },
      bookedDate,
    };

    try {
      // Make sure the POST request matches your backend's endpoint
      const response = await axios.post('http://localhost:8080/api/tickets', ticketData);

      // Check for the correct status code after booking
      if (response.status === 201) { // 201 indicates successful creation
        alert('Ticket booked successfully!');
        onClose();
      }
    } catch (error) {
      // Improved error message to provide more details
      const message = error.response?.data?.message || 'Error booking ticket. Please try again.';
      setErrorMessage(message);
      console.error('Error booking ticket:', error);
    }
  };

  return (
    <div className="modal" style={{ display: 'block', position: 'fixed', zIndex: 1050 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book Ticket for {bus.busNumber}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <label>Booked Date:</label>
            <input 
              type="date" 
              value={bookedDate} 
              onChange={(e) => setBookedDate(e.target.value)} 
              required 
            />
            <button onClick={handleBooking} className="btn btn-primary mt-2">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
