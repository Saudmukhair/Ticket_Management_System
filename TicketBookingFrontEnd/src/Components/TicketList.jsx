import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const TicketList = () => {
  const user = useSelector((state) => state.user.user); // Get user from Redux store
  const [tickets, setTickets] = useState([]);
  const [editTicketId, setEditTicketId] = useState(null);
  const [newBookedDate, setNewBookedDate] = useState('');

  useEffect(() => {
    console.log('User:', user, 'UserID:', user?.id);
    const fetchTickets = async () => {
      if (user && user.id) {
        try {
          const response = await axios.get(`http://localhost:8080/api/tickets/${user.id}`);
          console.log('Fetched tickets:', response.data);
          setTickets(response.data);
        } catch (error) {
          console.error('Error fetching tickets:', error);
        }
      }
    };

    fetchTickets();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tickets/${id}`);
      setTickets(tickets.filter(ticket => ticket.id !== id));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updatedTicket = { ...tickets.find(ticket => ticket.id === id), bookedDate: newBookedDate };
      const response = await axios.put(`http://localhost:8080/api/tickets/${id}`, updatedTicket);
      setTickets(tickets.map(ticket => (ticket.id === id ? response.data : ticket)));
      setEditTicketId(null); // Stop editing after update
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const startEditing = (id, bookedDate) => {
    setEditTicketId(id);
    setNewBookedDate(bookedDate); // Set the initial date in the input
  };

  return (
    <div>
      <h2>Your Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              {ticket.bus.busNumber} - {ticket.bookedDate}
              <button onClick={() => handleDelete(ticket.id)} className="btn btn-danger ms-3">Delete</button>

              {editTicketId === ticket.id ? (
                <div>
                  <input
                    type="date"
                    value={newBookedDate}
                    onChange={(e) => setNewBookedDate(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(ticket.id)} className="btn btn-success ms-2">
                    Save
                  </button>
                  <button onClick={() => setEditTicketId(null)} className="btn btn-secondary ms-2">
                    Cancel
                  </button>
                </div>
              ) : (
                <button onClick={() => startEditing(ticket.id, ticket.bookedDate)} className="btn btn-warning ms-3">
                  Update Date
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TicketList;


