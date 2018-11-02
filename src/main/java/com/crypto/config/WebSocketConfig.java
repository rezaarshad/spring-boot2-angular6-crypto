package com.crypto.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

/**
 * Created by Reza Arshad on 10/02/18.
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topics");
        config.setApplicationDestinationPrefixes("/app");
    }

    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/crypto-ws").setAllowedOrigins("*").withSockJS();
    }
}