package com.capestone.bornappetiterestro.dto;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capestone.bornappetiterestro.dao.CartRepository;
import com.capestone.bornappetiterestro.dao.MenuRepository;
import com.capestone.bornappetiterestro.model.Cart;
import com.capestone.bornappetiterestro.model.Menu;

@Service
public class MenuServiceImpl implements MenuService{

	@Autowired
	MenuRepository menurepository;
	@Autowired
	CartRepository cartrepository;
	@Override
	
	// This method is used to find the items present in Hotel by its name
	public List<Menu> Resaurent(String hotel) {
		return menurepository.findByHotel(hotel);
	}

	//This method is used to search the particular item by its disname
	@Override
	public List<Menu> Search(String dishname) {
		return menurepository.findByDishname(dishname);
	}

	//This method is used to Add items to the Cart from the restaurent  
	
	@Override
	public Cart AddCart(Cart cart) {
		// TODO Auto-generated method stub
		Cart cart1 = cartrepository.save(cart);
		return cart1; 
	}

	
	
	private Cart findById(int dishid) {
		if(cartrepository.findById(dishid).isPresent()) {
			return cartrepository.findById(dishid).get();
		}
		return null;

	}

	//This method is used to delete the particular item from cart by its dishid	
	@Override
	public void delete(int dishid) {

		Cart cart2 = findById(dishid);
		cartrepository.delete(cart2);
	}


	//This method is used to delete all the items from cart
	@Override
	public Cart deleteAll(Cart cart) {
		return cart;

	}





}
