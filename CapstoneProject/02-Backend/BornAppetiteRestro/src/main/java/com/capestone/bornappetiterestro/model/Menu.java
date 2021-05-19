package com.capestone.bornappetiterestro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;


@Entity
@Table
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dishid;
	private String dishname;
	private double dishcost;
	private String hotel;
	private String imageurl;

	public Menu() {
		super();
	}

	public Menu(int dishid, String dishname, double dishcost, String hotel, String imageurl) {
		super();
		this.dishid = dishid;
		this.dishname = dishname;
		this.dishcost = dishcost;
		this.hotel = hotel;
		this.imageurl = imageurl;
	}

	public int getDishid() {
		return dishid;
	}

	public void setDishid(int dishid) {
		this.dishid = dishid;
	}

	public String getDishname() {
		return dishname;
	}

	public void setDishname(String dishname) {
		this.dishname = dishname;
	}

	public double getDishcost() {
		return dishcost;
	}

	public void setDishcost(double dishcost) {
		this.dishcost = dishcost;
	}

	public String getHotel() {
		return hotel;
	}

	public void setHotel(String hotel) {
		this.hotel = hotel;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}



}
