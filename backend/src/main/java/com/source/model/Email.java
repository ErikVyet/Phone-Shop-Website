package com.source.model;

import java.time.LocalDateTime;

import com.source.dto.EmailDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "email")
public class Email {

    @Id
    private String email;
    private LocalDateTime submitted;

    public Email() { }

    public Email(String email, LocalDateTime submitted) {
        this.email = email;
        this.submitted = submitted;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getSubmitted() {
        return submitted;
    }

    public void setSubmitted(LocalDateTime submitted) {
        this.submitted = submitted;
    }
    
    public static Email fromDTO(EmailDTO emailDTO) {
        return new Email(emailDTO.getEmail(), emailDTO.getSubmitted());
    }

}