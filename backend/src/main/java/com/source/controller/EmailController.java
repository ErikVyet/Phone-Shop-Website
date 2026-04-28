package com.source.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.source.dto.EmailDTO;
import com.source.service.EmailService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:5173") 
public class EmailController {

    protected final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> submitEmail(@Valid @RequestBody EmailDTO emailDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            emailDTO.setSubmitted(LocalDateTime.now());
            if (this.emailService.insert(emailDTO)) {
                response.put("status", 200);
                response.put("message", "Email submitted successfully.");
            }
            else {
                response.put("status", 500);
                response.put("message", "Failed to submit email. This email had already been submitted.");
            }
            return ResponseEntity.ok(response);
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}