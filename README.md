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
