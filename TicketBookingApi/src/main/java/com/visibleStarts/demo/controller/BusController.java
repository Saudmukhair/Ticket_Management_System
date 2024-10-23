package com.visibleStarts.demo.controller;

import com.visibleStarts.demo.models.Bus;
import com.visibleStarts.demo.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/buses")
public class BusController {
    private final BusService busService;

    @Autowired
    public BusController(BusService busService) {
        this.busService = busService;
    }

    @GetMapping
    public ResponseEntity<List<Bus>> getAvailableBuses(@RequestParam String from, @RequestParam String to) {
        List<Bus> buses = busService.findBusesByFromAndTo(from, to);
        return ResponseEntity.ok(buses);
    }
}
