package com.portfolio.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.backend.model.ContactMessage;
import com.portfolio.backend.repository.ContactMessageRepository;

@Service
public class ContactMessageService {
    @Autowired
    private ContactMessageRepository repo;

    public ContactMessage saveMessage(ContactMessage message) {
        if (repo.existsByNameAndEmailAndMessage(
                message.getName(), message.getEmail(), message.getMessage())) {
            throw new RuntimeException("Duplicate submission detected.");
        }
        return repo.save(message);
    }
}
