package com.visibleStarts.demo.repository;

import com.visibleStarts.demo.models.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
    List<Bus> findByFromLocationAndToLocation(String from, String to);
}
