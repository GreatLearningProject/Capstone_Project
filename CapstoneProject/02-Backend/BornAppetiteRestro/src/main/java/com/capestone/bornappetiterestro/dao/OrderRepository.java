package com.capestone.bornappetiterestro.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capestone.bornappetiterestro.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

}
