package com.crypto.controller;

import com.crypto.dto.Currency;
import com.crypto.service.CurrencyService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

/**
 * Created by Reza Arshad on 10/02/18.
 */
@RestController
@RequestMapping("/api/currencies")
public class CurrencyController {

    CurrencyService currencyService;

    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Currency> list() {
        return this.currencyService.getApiCurrencies();
    }

}
