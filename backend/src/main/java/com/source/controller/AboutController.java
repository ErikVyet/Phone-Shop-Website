package com.source.controller;

import com.source.models.About;
import com.source.repositories.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5175")
public class AboutController {

    @Autowired
    private AboutRepository aboutRepository;

    @GetMapping("/about")
    public List<About> getAllAbout() {
        return aboutRepository.findAll();
    }
}