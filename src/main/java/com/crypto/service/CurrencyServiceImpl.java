package com.crypto.service;

import com.crypto.dto.Currency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * Created by Reza Arshad on 10/02/18.
 */
@Service
public class CurrencyServiceImpl implements CurrencyService {

    final String apiUrl = "https://api.coinmarketcap.com/v1/ticker/";

    @Autowired
    RestTemplate restTemplate;

    public List<Currency> getApiCurrencies() {
        return restTemplate.getForObject(apiUrl, List.class);
    }

    public Currency getApiCurrency(String id) {
        return restTemplate.getForObject(apiUrl + id, Currency[].class)[0];
    }

}
