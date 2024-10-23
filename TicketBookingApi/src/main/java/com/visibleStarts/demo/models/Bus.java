package com.visibleStarts.demo.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "buses")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String busNumber;

    @Column(nullable = false)
    private String fromLocation;

    @Column(nullable = false)
    private String toLocation;

    @Column(nullable = false)
    private String availableDate;

    public Bus() {}

    public Bus(String busNumber, String fromLocation, String toLocation, String availableDate) {
        this.busNumber = busNumber;
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.availableDate = availableDate;
    }

    // Getters and Setters
    // ...
}
