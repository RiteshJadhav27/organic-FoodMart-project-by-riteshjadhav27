# Organic FoodMart Project

## Overview
Organic FoodMart is an online platform for selling organic products. The project is built with a simple Java backend, PostgreSQL database, and a responsive frontend using HTML, CSS, JavaScript, and Bootstrap.

## Technologies Used
- **Backend:** Java (no external libraries, uses only core Java)
- **Database:** PostgreSQL
- **Frontend:** HTML, CSS, JavaScript, Bootstrap Framework

## Features
- Display products from the database
- Add products to the cart
- Checkout process with address form and payment options
- User login and signup functionality

## Project Structure
organic ├── /backend │ ├── /src │ │ ├── /carta (Cart-related functionality) │ │ ├── /product (Product-related functionality) │ │ ├── /database (Database connection and queries) │ │ ├── /signin (Signin functionality) │ │ ├── /signup (Signup functionality) │ │ ├── /checkout (Checkout functionality) │ │ └── /StaticFileHandler (Handles static files) │ ├── /lib (JAR files) │ │ ├── gson-2.10.1.jar │ │ └── postgresql-42.7.4.jar │ └── HttpServerExample.java (Main entry point for the server) ├── /frontend │ ├── /assets (Product images and other static assets) │ ├── /styles (CSS files) │ ├── /scripts (JavaScript files) │ ├── /index.html (Homepage) │ ├── /products.html (Products page) │ └── /cart.html (Cart page) └── README.md (This file)


## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>

## Backend Setup:
- Navigate to the /backend directory.
- Make sure PostgreSQL is installed and running on your system.
- Create the organic_foodmart database and import your schema if required.
- First type command to enter in Backend Folder in Terminal
    cd Backend
- Use the javac command to compile the backend Java code:
    javac -cp ".;lib/postgresql-42.7.4.jar;lib/gson-2.10.1.jar" -d out src/carta/*.java src/product/*.java src/database/*.java src/signin/*.java src/signup/*.java src/checkout/*.java src/StaticFileHandler/*.java src/HttpServerExample.java

- Start the backend server to run the API:
    java -cp ".;lib/postgresql-42.7.4.jar;lib/gson-2.10.1.jar;out" HttpServerExample


## Frontend Setup:

Navigate to the /frontend directory.
Open the index.html or any other page in your browser.

## Database Setup:
Make sure PostgreSQL is running.
Create a database named organic_foodmart.
Ensure the product and other required tables are created.

## Running the Project:
The project can be accessed at http://localhost:8080 (or your preferred port).
Endpoints
GET /product - Fetch all products from the database.
POST /cart - Add products to the cart.
GET /cart - Fetch cart items.
Contributing
Feel free to fork the project, open an issue, or submit a pull request.