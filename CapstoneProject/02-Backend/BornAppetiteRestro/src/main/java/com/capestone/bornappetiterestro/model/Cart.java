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
@Table(name="Cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "dishid")
	private int dishid;
	@Column(name = "dishname")
	private String dishname;
	@Column(name = "dishcost")
	private double dishcost;
	@Column(name = "hotel")
	private String hotel;
	@Column(name = "imageurl")
	private String imageurl;
	@Column(name = "quantity")
	private int quantity;

	public Cart() {
		super();
	}

	public Cart(int dishid, String dishname, double dishcost, String hotel, String imageurl, int quantity) {
		super();
		this.dishid = dishid;
		this.dishname = dishname;
		this.dishcost = dishcost;
		this.hotel = hotel;
		this.imageurl = imageurl;
		this.quantity=quantity;
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

	public  int getQuantity() {
		return quantity;
	}

	public void setQuantity( int quantity) {
		this.quantity = quantity;
	}






}

