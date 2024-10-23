package com.visibleStarts.demo.service;

import com.visibleStarts.demo.exception.ResourceNotFoundException;
import com.visibleStarts.demo.models.Ticket;
import com.visibleStarts.demo.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> getAllTicketsByUser(Long userId) {
        return ticketRepository.findByUserId(userId);
    }

    public Ticket updateTicket(Long id, Ticket ticketDetails) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket not found"));

        ticket.setBookedDate(ticketDetails.getBookedDate());
        return ticketRepository.save(ticket);
    }

    public void deleteTicket(Long id) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket not found"));
        ticketRepository.delete(ticket);
    }
    public Ticket createTicket(Ticket ticket) {
        // Implement your logic to save the ticket to the database
        return ticketRepository.save(ticket);
    }

}
