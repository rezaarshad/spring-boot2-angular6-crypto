package com.crypto.controller;

import com.crypto.dto.Currency;
import com.crypto.service.CurrencyService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Reza Arshad on 10/02/18.
 */
@RestController
@EnableScheduling
public class WebSocketController {

    @Autowired
    CurrencyService currencyService;

    @Autowired
    private SimpMessagingTemplate template;

    @GetMapping("/currency")
    @Scheduled(fixedRate = 10000)
    public void getCurrencies() {
        template.convertAndSend("/topics/currency", currencyService.getApiCurrencies());
    }
}
