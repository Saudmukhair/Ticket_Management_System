package com.visibleStarts.demo.models;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "bus_id", nullable = false)
    private Bus bus;

    @Column(nullable = false)
    private String bookedDate;

    public Ticket() {}

    public Ticket(User user, Bus bus, String bookedDate) {
        this.user = user;
        this.bus = bus;
        this.bookedDate = bookedDate;
    }

    // Getters and Setters
    // ...
}
