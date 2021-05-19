package com.capestone.bornappetiterestro.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.capestone.bornappetiterestro.dao.CartRepository;
import com.capestone.bornappetiterestro.dao.MenuRepository;
import com.capestone.bornappetiterestro.dto.MenuService;
import com.capestone.bornappetiterestro.model.Cart;
import com.capestone.bornappetiterestro.model.Menu;
import com.capestone.bornappetiterestro.model.User;



@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MenuController {

	@Autowired
	MenuRepository menurepository;

	@Autowired
	CartRepository cartrepository;

	@Autowired
	MenuService menuservice;

	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping(value = "menu/hotel/{hotel}")
	
	
    //	This findByHotel() is used to find the items present in a particular Hotel By its Name
	
	public ResponseEntity<List<Menu>> findByHotel(@PathVariable("hotel") String hotel){
		try {
			List<Menu> menu = menurepository.findByHotel(hotel);

			if(menu.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(menu,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);

		}
	}
	
   // findByDish() is used to search the particular item by dishname
	
	@GetMapping(value = "menu/dishname/{dishname}")
	public ResponseEntity<List<Menu>> findByDish(@PathVariable("dishname") String dishname){
		try {
			List<Menu> menu = menurepository.findByDishname(dishname);

			if(menu.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(menu,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);

		}
	}
	
    //	addtoCart() is used to add items to the Cart from the Restaurents

	@PostMapping(value = "/cartitems")
	public ResponseEntity<Cart> addtoCart(@RequestBody Cart cart) {
		try {
			Cart cart1 = menuservice.AddCart(cart);
			return new ResponseEntity<>(cart1, HttpStatus.CREATED);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}  
	
   //	getAllItems() is used to get all the dishes present in the cart
	
	@GetMapping(value = "/cartitems")
	public ResponseEntity<List<Cart>> getAllItems(){
		List<Cart> items = new ArrayList<Cart>();
		try {
			cartrepository.findAll().forEach(items::add);
			if(items.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} 
			return new ResponseEntity<>(items,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);

		}
	}
	
   // delete() is used to remove a particular dish from cart using dishid

	@DeleteMapping("cartitems/{dishid}")
	public ResponseEntity<List> delete(@PathVariable int dishid){
		System.out.println("deleting "+dishid);
		menuservice.delete(dishid);
		return new ResponseEntity<List>(HttpStatus.OK);
	}
	
   //delete1() is used to delete all the items from cart when user clicks on checkout	

	@DeleteMapping(value = "/cartitems")
	public ResponseEntity<List> delete1(@RequestBody Cart cart){
		menuservice.deleteAll(cart);
		return new ResponseEntity<List>(HttpStatus.OK);
	}

}

