package com.visibleStarts.demo.controller;

import com.visibleStarts.demo.models.Ticket;
import com.visibleStarts.demo.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/{userId}")
    public List<Ticket> getAllTicketsByUser(@PathVariable Long userId) {
        return ticketService.getAllTicketsByUser(userId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        Ticket updatedTicket = ticketService.updateTicket(id, ticket);
        return ResponseEntity.ok(updatedTicket);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        Ticket createdTicket = ticketService.createTicket(ticket); // Ensure your TicketService has a createTicket method
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTicket);
    }

}

