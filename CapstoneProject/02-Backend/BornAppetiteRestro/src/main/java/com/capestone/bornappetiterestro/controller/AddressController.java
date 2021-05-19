package com.capestone.bornappetiterestro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capestone.bornappetiterestro.dto.AddressService;
import com.capestone.bornappetiterestro.model.Address;
import com.capestone.bornappetiterestro.model.User;


@RestController
public class AddressController {

	@Autowired
	private AddressService addressservice;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/address")
	
    //	This method is used to get all the Address from AddressForm to DataBase
	
	public Address CustomerAddress(@RequestBody Address address){
		Address userObj = null;
		userObj = addressservice.saveAddress(address);
		return userObj;
	}

}
