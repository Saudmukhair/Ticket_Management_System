package com.visibleStarts.demo.service;

import com.visibleStarts.demo.models.Bus;
import com.visibleStarts.demo.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;

    public List<Bus> findBusesByFromAndTo(String from, String to) {
        return busRepository.findByFromLocationAndToLocation(from, to);
    }
}
