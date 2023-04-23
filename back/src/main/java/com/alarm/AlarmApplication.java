package com.alarm;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AlarmApplication implements CommandLineRunner{

    public static void main(String[] args) {
        SpringApplication.run(AlarmApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Hello World!");
    }
    
	/*
	 * @Bean public CommandLineRunner demo(testRepository repository) { return
	 * (args) -> { // save a few customers repository.save(new test()); }; }
	 */
}