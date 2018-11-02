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

//    @MessageMapping("/currency")
//    @SendTo("/topics/currency")
//    @Scheduled(fixedRate = 5000)
//    public List<Currency> currency() {
//       return currencyService.getApiCurrencies();
//    }

    @GetMapping("/currency")
    @Scheduled(fixedRate = 5000)
    public String getCurrencies() {
        ObjectMapper mapper = new ObjectMapper();

        try {
            template.convertAndSend("/topics/currency",mapper.writeValueAsString(currencyService.getApiCurrencies()) );
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "successfully sent to Angular !";
    }
}
