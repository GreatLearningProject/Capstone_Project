package com.capestone.bornappetiterestro.dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.capestone.bornappetiterestro.dao.CartRepository;
import com.capestone.bornappetiterestro.model.Cart;
import com.capestone.bornappetiterestro.model.Menu;
import com.capestone.bornappetiterestro.model.User;

public interface MenuService {
	

   // This method is used to find the items present in Hotel by its name
	List<Menu> Resaurent(String hotel);
	
  //This method is used to search the particular item by its dishname	
	List<Menu> Search(String dishname); 
	
  //This method is used to Add items to the Cart from the restaurent  
	Cart AddCart(Cart cart);
	
  //This method is used to delete the particular item from cart by its dishid	
	void delete(int dishid);

	
  //This method is used to delete all the items from cart
	Cart deleteAll(Cart cart);
		
}

