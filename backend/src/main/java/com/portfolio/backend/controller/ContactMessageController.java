package com.portfolio.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.portfolio.backend.model.ContactMessage;
import com.portfolio.backend.service.ContactMessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactMessageController {
    @Autowired
    private ContactMessageService service;

    @PostMapping
    public ResponseEntity<ContactMessage> sendMessage(@RequestBody ContactMessage message) {
        try {
            ContactMessage saved = service.saveMessage(message);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}
