package com.capestone.bornappetiterestro.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capestone.bornappetiterestro.dao.RegistrationRepository;
import com.capestone.bornappetiterestro.model.User;


@Service
public class RegistrationService {

	@Autowired
	private RegistrationRepository repo;

	public User saveUser(User user) {
		return repo.save(user);
	}
	public User fetchUserByEmail(String email) {
		return repo.findByEmail(email);
	}
	public User fetchUserByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

}
