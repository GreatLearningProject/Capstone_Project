package com.capestone.bornappetiterestro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Order")
@Getter
@Setter
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "orderid")
	private Long orderid;

	@Column(name = "totalquantity")
	private int totalquantity;

	@Column(name = "totalprice")
	private double totalprice;

	@OneToOne
	@JoinColumn(name="addressid")
	private Address addressid;

	@OneToOne
	@JoinColumn(name="customerid")
	private Customer customerid;

}