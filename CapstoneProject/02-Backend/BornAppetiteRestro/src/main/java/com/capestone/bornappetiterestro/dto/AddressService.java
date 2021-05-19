package com.capestone.bornappetiterestro.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capestone.bornappetiterestro.dao.AddressRepository;
import com.capestone.bornappetiterestro.model.Address;

@Service
public class AddressService {
	@Autowired
	AddressRepository addressrepo;

   //saveAddress() is used to save the user address details from the AddressForm	
	public Address saveAddress(Address address) {
		return addressrepo.save(address);
	}

}
