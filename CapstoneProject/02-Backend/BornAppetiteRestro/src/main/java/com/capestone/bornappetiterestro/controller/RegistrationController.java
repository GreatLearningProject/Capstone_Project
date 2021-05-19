package com.capestone.bornappetiterestro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capestone.bornappetiterestro.dto.RegistrationService;
import com.capestone.bornappetiterestro.model.User;

@RestController
public class RegistrationController {

	@Autowired
	private RegistrationService service;

	//For User Registration and its Validation

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			User userobj = service.fetchUserByEmail(tempEmail);
			if (userobj != null) {
				throw new Exception("user with " + tempEmail + "is already exist");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	

	//For User Login and Comparing whether the user is valid or not
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		User userObj =null;
		if(tempEmail != null && tempPass != null) {
			userObj = service.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if (userObj == null) {
			throw new Exception("Bad Credentials");
		}

		return userObj;

	}
}
