package com.capestone.bornappetiterestro.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capestone.bornappetiterestro.dao.OrderRepository;
import com.capestone.bornappetiterestro.model.Address;
import com.capestone.bornappetiterestro.model.Order;

@Service
public class OrderService {
	@Autowired
	OrderRepository orderrepo;

   //saveOrder() is used to save the  Order details like price,quantity and orderid from cart
	
	public Order saveOrder(Order order) {
		return orderrepo.save(order);
	}
}
