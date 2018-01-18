-- Created a new database called bamazon
DROP DATABASE if exists bamazon; 

CREATE DATABASE bamazon;
-- enter the database to make changes and access information-
USE bamazon;
-- Create the products table
CREATE TABLE products (
itemID INTEGER(11) AUTO_INCREMENT NOT NULL,
productName VARCHAR(30) NOT NULL,
departmentName VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stockQuantity INTEGER(10) NOT NULL,
PRIMARY KEY (itemID)
);



-- Used to change the column price from INTEGER TO DOUBLE in the products table

ALTER TABLE products MODIFY COLUMN price DOUBLE;

-- Used to delete all entries in the products table
DELETE FROM products;
-- Insert different rows into the products table
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("Cotton Balls", "Beauty", 3, 80);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("Mascara", "Beauty", 1.50, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("Chapstick", "Beauty", 2.5, 18);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("floral dress", "Clothing", 30, 800);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("Tablet", "Electronics", 5000, 400);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("Galaxy s7", "Electronics", 499, 1200);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("steak", "Food", 10, 99);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("broccoli", "Food", 1, 970);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("beads", "Crafts", 3, 35);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("yarn", "Crafts", 5, 29);

-- see everything in the products table
SELECT * FROM products;

CREATE TABLE departments (
departmentID INTEGER(10) AUTO_INCREMENT NOT NULL,
departmentName VARCHAR(30) NOT NULL,
overHeadCosts DECIMAL(10, 2) NOT NULL,
totalSales DECIMAL(10, 2) NOT NULL,
PRIMARY KEY (departmentID)
);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Crafts", 1000, 2000);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Beauty", 4000, 8000);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Food", 3000, 17000.50);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Clothing", 2000, 12000);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Electronics", 2500, 20000);

SELECT * FROM departments;