# User Authentication API Documentation

## Overview

This project implements a complete User Authentication system using
**Node.js**, **Express**, **MongoDB**, **Mongoose**, **bcrypt**, and
**JWT**.

It includes: - User Registration\
- User Login\
- Password Hashing\
- JWT Token Generation\
- CRUD Operations for Users

------------------------------------------------------------------------

## Folder Structure

    project/
    │── controllers/
    │   └── user.controller.js
    │── models/
    │   └── userModel.js
    │── routes/
    │   └── user.route.js
    │── server.js
    │── .env
    │── package.json

------------------------------------------------------------------------

## API Base URL

    http://localhost:3000/api/user

------------------------------------------------------------------------

# Endpoints

------------------------------------------------------------------------

## 1. **Register User**

### **POST** `/register`

### Request Body

``` json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@gmail.com",
  "password": "John@1234"
}
```

### Password Policy

-   Min 8 Characters\
-   At least one uppercase\
-   At least one lowercase\
-   At least one number\
-   At least one special character

### Success Response

``` json
{
  "success": true,
  "message": "User Created successfully",
  "user": { ... }
}
```

------------------------------------------------------------------------

## 2. **Login User**

### **POST** `/login`

### Request Body

``` json
{
  "email": "john@gmail.com",
  "password": "John@1234"
}
```

### Success Response

``` json
{
  "success": true,
  "message": "Login Successfully",
  "token": "...",
  "user": { ... }
}
```

------------------------------------------------------------------------

## 3. **Get All Users**

### **GET** `/`

### Success Response

``` json
[
  {
    "_id": "...",
    "fullname": {...},
    "email": "..."
  }
]
```

------------------------------------------------------------------------

## 4. **Get User by ID**

### **GET** `/:id`

------------------------------------------------------------------------

## 5. **Delete User**

### **DELETE** `/:id`

------------------------------------------------------------------------

## 6. **Update User**

### **PUT** `/:id`

Body Example:

``` json
{
  "fullname": {"firstname":"John Updated", "lastname":"Doe"},
  "email": "new@gmail.com",
  "password": "NewPass@123"
}
```

------------------------------------------------------------------------

# Mongoose Schema Overview

``` js
fullname: {
    firstname: { type: String, required: true, minlength: 3 },
    lastname: { type: String, minlength: 3 }
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 5
},
password: {
    type: String,
    required: true
},
socketId: { type: String }
```

------------------------------------------------------------------------

# Controller Overview

## createUser()

-   Validates fields\
-   Validates password with regex\
-   Checks duplicate email\
-   Hashes password\
-   Saves user

## LoginUser()

-   Checks email\
-   Compares password with hashed value\
-   Generates JWT token

## CRUD Functions

-   `getAllUser()`
-   `getUserById()`
-   `deleteUser()`
-   `updateUser()`

------------------------------------------------------------------------

# Notes

-   Password is stored as **hashed**.
-   JWT is required for future protected routes.
-   Use proper `.env` variables for security.

------------------------------------------------------------------------

# Author

Auto-generated documentation.
