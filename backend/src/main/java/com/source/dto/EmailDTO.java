package com.source.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmailDTO implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email cannot be blank")
    private String email;
    private LocalDateTime submitted;

    public EmailDTO() { }

    public EmailDTO(String email, LocalDateTime submitted) {
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

    public static EmailDTO fromEntity(com.source.model.Email email) {
        return new EmailDTO(email.getEmail(), email.getSubmitted());
    }

}