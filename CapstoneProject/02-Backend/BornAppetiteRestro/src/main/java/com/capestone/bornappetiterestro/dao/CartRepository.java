package com.capestone.bornappetiterestro.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.capestone.bornappetiterestro.model.Cart;
import com.capestone.bornappetiterestro.model.Menu;

public interface CartRepository extends CrudRepository<Cart, Integer>{


		
}
