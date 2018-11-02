package com.crypto.controller;

import com.crypto.dto.Currency;
import com.crypto.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.util.List;

/**
 * Created by Reza Arshad on 10/02/18.
 */
@Controller
@EnableScheduling
public class WebSocketController {

    @Autowired
    CurrencyService currencyService;

    @Autowired
    private SimpMessagingTemplate template;

    @MessageMapping("/currency")
    @SendTo("/topics/currency")
    @Scheduled(fixedRate = 5000)
    public List<Currency> currency() {
       return currencyService.getApiCurrencies();
    }

////    @GetMapping("/currency")
//    @Scheduled(fixedRate = 5000)
//    public String getCurrencies() {
//        template.convertAndSend("/topics/currency", currencyService.getApiCurrencies());
//        return "Notifications successfully sent to Angular !";
//    }
}
