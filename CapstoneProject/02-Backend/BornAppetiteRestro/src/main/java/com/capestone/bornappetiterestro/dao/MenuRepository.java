package com.capestone.bornappetiterestro.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.capestone.bornappetiterestro.model.Menu;

public interface MenuRepository extends CrudRepository<Menu, Integer>{
	
	
    //findByHotel() is used to find the items present in the hotel	
	List<Menu> findByHotel(String hotel);
	
    //findByDishname() is used to search the particular item user wants by dishname
	List<Menu> findByDishname(String dishname);
}
