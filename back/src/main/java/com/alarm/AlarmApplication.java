package com.alarm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AlarmApplication {

    public static void main(String[] args) {
        SpringApplication.run(AlarmApplication.class, args);
    }
    
	/*
	 * @Bean public CommandLineRunner demo(testRepository repository) { return
	 * (args) -> { // save a few customers repository.save(new test()); }; }
	 */
}