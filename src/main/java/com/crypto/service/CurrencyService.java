package com.crypto.service;

import com.crypto.dto.Currency;
import org.springframework.validation.annotation.Validated;

import java.util.List;

/**
 * Created by Reza Arshad on 10/02/18.
 */
@Validated
public interface CurrencyService {

    List<Currency> getApiCurrencies();

    Currency getApiCurrency(String id);
}
;