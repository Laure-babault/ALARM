package com.alarm;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

import com.alarm.entity.test;
import com.alarm.repository.testRepository;

@SpringBootApplication
public class AlarmApplication {

    public static void main(String[] args) {
        SpringApplication.run(AlarmApplication.class, args);
    }
    
    @Bean
    public CommandLineRunner demo(testRepository repository) {
      return (args) -> {
        // save a few customers
        repository.save(new test());
      };
    }
}