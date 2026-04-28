package com.source.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.source.model.Email;

public interface EmailRepository extends JpaRepository<Email, String> {
    
}