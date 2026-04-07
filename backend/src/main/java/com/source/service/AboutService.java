package com.source.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.source.dto.AboutDTO;
import com.source.model.About;
import com.source.repository.AboutRepository;

@Service
public class AboutService {
    
    protected final AboutRepository aboutRepository;

    public AboutService(AboutRepository aboutRepository) {
        this.aboutRepository = aboutRepository;
    }

    @Transactional(readOnly = true)
    public List<AboutDTO> getAll() {
        List<About> list = aboutRepository.findAll();
        List<AboutDTO> result = list.stream().map(about -> {
            return AboutDTO.fromEntity(about);
        }).toList();
        return result;
    }

}