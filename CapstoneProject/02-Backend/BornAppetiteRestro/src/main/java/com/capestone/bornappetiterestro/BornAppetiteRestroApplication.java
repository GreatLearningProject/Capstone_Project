package com.capestone.bornappetiterestro;

import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.capestone.bornappetiterestro.model.Order;

@SpringBootApplication
public class BornAppetiteRestroApplication {

	public static void main(String[] args) {
		SpringApplication.run(BornAppetiteRestroApplication.class, args);
	}

}
