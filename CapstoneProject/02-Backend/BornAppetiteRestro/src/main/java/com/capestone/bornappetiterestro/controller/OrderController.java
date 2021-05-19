package com.capestone.bornappetiterestro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capestone.bornappetiterestro.dto.AddressService;
import com.capestone.bornappetiterestro.dto.OrderService;
import com.capestone.bornappetiterestro.model.Address;
import com.capestone.bornappetiterestro.model.Order;

@RestController
public class OrderController {

	@Autowired
	private OrderService orderservice;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/order")
	
    //	This method is used to get all the Address from AddressForm to DataBase
	
	public Order OrderDetails(@RequestBody Order order){
		Order userObj = null;
		userObj = orderservice.saveOrder(order);
		return userObj;
	}

}