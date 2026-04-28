package com.source.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.source.dto.EmailDTO;
import com.source.model.Email;
import com.source.repository.EmailRepository;

@Service
public class EmailService {
    
    protected final EmailRepository emailRepository;

    public EmailService(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;
    }

    @Transactional
    public boolean insert(EmailDTO emailDTO) {
        try {
            if (emailRepository.existsById(emailDTO.getEmail())) {
                throw new Exception("The email is already existed");
            }
            emailRepository.save(Email.fromDTO(emailDTO));
            return true;
        } 
        catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

}