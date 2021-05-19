create database resteasy;
use resteasy;

create table `Customer`(`customerid` int(10) auto_increment NOT NULL, `firstname` varchar(50) Default null, 
                         `lastname` varchar(50) Default null, `email` varchar(50) Default null,  `password` varchar(50) Default null, 
                         primary key (`customerid`));
                         
create table `Address`(`addressid` int(10) auto_increment NOT NULL, `city` varchar(20) Default null, 
                         `country` varchar(20) Default null, `state` varchar(20) Default null, 
                         `street` varchar(20) Default null, `zipcode` varchar(6) Default null,
                         primary key (`addressid`));

create table `Order`(`orderid` int(10) auto_increment NOT NULL, `totalquantity` int(10) Default null, 
                         `totalprice` double Default null, `addressid` int(10) Default null, `customerid` int(10) NOT NULL,
                         foreign key(addressid) references Address(addressid), foreign key(customerid) references Customer(customerid), primary key (`orderid`));


CREATE TABLE User (id  int(10) AUTO_INCREMENT ,
    email varchar(255) NOT NULL,
    username varchar(255),
    password  varchar(255),
    PRIMARY KEY (id)
);


create table Menu(dishid int(10) NOT NULL  AUTO_INCREMENT, dishname varchar(50) Default null, 
                         dishcost double Default null, hotel varchar(50) Default null,  imageurl varchar(50) Default null, 
                         primary key (`dishid`));
                         
                         
insert into Menu values(1,'Burger',300,'EatNRepeat','burger.jpg');
insert into Menu values(2,'Pizza',500,'EatNRepeat','pizza.jpg');
insert into Menu values(3,'Thai Noodles',800,'EatNRepeat','thainoodles.jpg');
insert into Menu values(4,'French Fries',600,'EatNRepeat','frenchfries.jpg');
insert into Menu values(5,'Idly',100,'UdipiHotel','idly.jpg');
insert into Menu values(6,'Dosa',120,'UdipiHotel','dosa.jpg');
insert into Menu values(7,'Poori',150,'UdipiHotel','poori.jpg');
insert into Menu values(8,'Thai Noodles',350,'UdipiHotel','thainoodles.jpg');
insert into Menu values(9,'Roti',180,'PunjabiDhaba','roti.jpg');
insert into Menu values(10,'Mushroom Curry',400,'PunjabiDhaba','mushroomcurry.jpg');
insert into Menu values(11,'Chole Chawal',200,'PunjabiDhaba','cholechawal.jpg');
insert into Menu values(12,'Biriyani',500,'PunjabiDhaba','biriyani.jpg');
insert into Menu values(13,'Gulab Jamun',100,'SarvanaBhavan','gulabjamun.jpg');
insert into Menu values(14,'Gajar Halwa',200,'SarvanaBhavan','gajarhalwa.jpg');
insert into Menu values(15,'Mughlai Chicken',300,'SarvanaBhavan','mughlaichicken.jpg');
insert into Menu values(16,'Paneer Tikka',200,'SarvanaBhavan','paneertikka.jpg');

create table Cart(dishid int(10) NOT NULL  AUTO_INCREMENT, dishname varchar(50) Default null, 
                         dishcost double Default null, hotel varchar(50) Default null,  imageurl varchar(50) Default null, 
                         quantity int(10) Default null,primary key (dishid));
                         

