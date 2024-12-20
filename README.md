# To do Configuration Guide

This document provides step-by-step instructions on how to configure and run the project for both the backend and frontend.

## Backend Configuration

1. **Install Dependencies**
```bash
   npm install
```
2. **Create a .env File**

Create a file named .env
Add the following environment variables to the .env file:
```
MONGO_DB=your-mongo-db-url
JWT_SECRET=<set your JWT_SECRET>
PORT=5000
```
3. **Start the Server**
You can start the server using either of the following commands:

```bash
node app.js
```
or, if you have nodemon installed:
```bash
nodemon app.js
```





To-Do API Documentation 

**Github link:** https://github.com/vivekyadav20364/to\_do\_api.git ![](Aspose.Words.7db7b98f-c8a7-430e-8e21-d9c6263de655.001.png)

**Introduction** 

This document provides instructions on how to use the To-Do API. The API allows users to perform  

CRUD (Create, Read, Update, Delete) operations on tasks and register, login, and authenticate using JWT tokens. 

Follow the steps below to interact with the API endpoints. 

Endpoints are organized by their functions such as authentication and task management. 

**1. Authentication** 
**1. Register User** 

To register a new user, send a **POST** request to the following endpoint with the required fields: 

Endpoint: 

POST **https://to-do-0wpu.onrender.com/api/auth/register** 

Request Body (JSON): 

{ 

"name": "Your Name", 

"email": "Your Email", 

"password": "Your Password" 
} 

Response: 

A successful registration will return a confirmation message. 

2. **Login User** 

To log in an existing user and receive a JWT token, send a POST request to: Endpoint: 

POST **https://to-do-0wpu.onrender.com/auth/login** 

Request Body (JSON): 

{ 

"email": "your-email", 

"password": "your-password" 
} 

Response: 

The response will contain a JWT token that can be used to authenticate future requests. 

**2. Task Management** 
**1. Fetch Tasks** 

To fetch a list of tasks, send a **GET** request with a valid JWT token in the Authorization header. 

Endpoint: 

GET **https://to-do-0wpu.onrender.com/tasks?page=1&limit=5** 

Headers: 

Authorization: Bearer <your-jwt-token> 

Response: 

A list of tasks will be returned in JSON format. Pagination is supported with 'page' and 'limit' query parameters. 

**2. Create Task** 

To create a new task, send a **POST** request with a valid JWT token and the task data in the request body. 

Endpoint: 

POST **https://to-do-0wpu.onrender.com/tasks** 

Request Body (JSON): 

{ 

"title": "Your Task Title", 

"description": "Your Task Description" 
} 

Headers: 

Authorization: Bearer <your-jwt-token> 

Response: 

The newly created task will be returned in JSON format. 

**3. Delete Task** 

To delete a task, send a **DELETE** request to the endpoint below with a valid JWT token in the Authorization header. 

Endpoint: 

DELETE **https://to-do-0wpu.onrender.com/tasks/{task-id}** 

Headers: 

Authorization: Bearer <your-jwt-token> 

Response: 

A message confirming the task deletion will be returned. 

**4. Update Task** 

To update a task, send a **PUT** request to the following endpoint with a valid JWT token in the Authorization header  

and the updated task data in the request body. 

Endpoint: 

PUT **https://to-do-0wpu.onrender.com/tasks/{task-id}** 

Request Body (JSON): 

{ 

"title": "Updated Task Title", 

"description": "Updated Task Description" 
} 

Headers: 

Authorization: Bearer <your-jwt-token> 

Response: 

The updated task data will be returned. 

