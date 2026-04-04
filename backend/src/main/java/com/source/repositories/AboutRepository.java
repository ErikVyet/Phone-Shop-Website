package com.source.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.source.models.About;

@Repository
public interface AboutRepository extends JpaRepository<About, Integer> {
}