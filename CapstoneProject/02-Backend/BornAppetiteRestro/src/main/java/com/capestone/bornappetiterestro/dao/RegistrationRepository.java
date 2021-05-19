package com.capestone.bornappetiterestro.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capestone.bornappetiterestro.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{
	
   // findByEmail() is used to find the user by email	
	public User findByEmail(String email);

   // findByEmailAndPassword() is used to find the user by email and password	
	public User findByEmailAndPassword(String email, String password);

}
