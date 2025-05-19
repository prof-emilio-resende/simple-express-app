# Express API Project Setup Guide

## Step 1: Initialize the Project
```bash
npm init -y
```
This command created a basic package.json file with default settings.

## Step 2: Install Dependencies
```bash
npm install --save express body-parser cors dotenv
```
This command installed:
- express: Web framework
- body-parser: Request body parsing
- cors: Cross-Origin Resource Sharing support
- dotenv: Environment variable management

## Step 3: Test the API
To test the hello endpoint:
```bash
curl http://localhost:3000/hello
```
Response:
```json
{"data":{"message":"Hello World"}}
```

## Running the Application
1. Start the server:
```bash
node index.js
```
2. The server will be available at http://localhost:3000
3. Test endpoints using curl or your preferred API client

## Available Endpoints
- GET /hello - Returns a hello world message

