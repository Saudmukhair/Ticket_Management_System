import React, { useState } from 'react';
import axios from 'axios';
import BookTicket from './BookTicket';

const AvailableBuses = () => {
  const [buses, setBuses] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [selectedBus, setSelectedBus] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // New state for tracking search

  const fetchBuses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/buses?from=${from}&to=${to}`);
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true); // Set to true when search is initiated
    fetchBuses();
  };

  return (
    <div className="container">
      <h2>Available Buses</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="from" className="form-label">From</label>
          <input 
            type="text" 
            className="form-control" 
            value={from} 
            onChange={(e) => setFrom(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="to" className="form-label">To</label>
          <input 
            type="text" 
            className="form-control" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {hasSearched && buses.length === 0 && (
        <p className="text-danger mt-3">Sorry, no buses available on this route.</p>
      )}

      <ul className="list-group mt-3">
        {buses.map((bus) => (
          <li key={bus.id} className="list-group-item">
            {bus.busNumber} - {bus.availableSeats} seats available
            <button className="btn btn-info btn-sm float-end" onClick={() => setSelectedBus(bus)}>Book Now</button>
          </li>
        ))}
      </ul>

      {selectedBus && <BookTicket bus={selectedBus} onClose={() => setSelectedBus(null)} />}
    </div>
  );
};

export default AvailableBuses;
