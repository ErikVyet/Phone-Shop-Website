package com.source.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.source.dto.AboutDTO;
import com.source.service.AboutService;

@RestController
@RequestMapping("/api/about")
@CrossOrigin(origins = "http://localhost:5173")
public class AboutController {

    protected final AboutService aboutService;

    public AboutController(AboutService aboutService) {
        this.aboutService = aboutService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<AboutDTO>> getAllAbout() {
        List<AboutDTO> list = new ArrayList<>();
        try {
            list.addAll(aboutService.getAll());
        }
        catch(Exception exception) {
            System.out.println(exception.getMessage());
            return ResponseEntity.internalServerError().build();
        }
        return ResponseEntity.ok(list);
    }
}