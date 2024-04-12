# Express API for Blog Posts

This is a simple Express API for managing blog posts. It allows you to perform CRUD operations (Create, Read, Update, Delete) on blog posts stored in memory.

## Features
- **GET All Posts**: Retrieve all existing blog posts.
- **GET Post by ID**: Retrieve a specific blog post by its ID.
- **POST New Post**: Add a new blog post.
- **PATCH Post**: Update a specific parameter of a blog post.
- **DELETE Post**: Delete a blog post by its ID.

## Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager) for installing dependencies.

## Installation
1. Clone this repository to your local machine:
   ```

   ```
2. Navigate to the project directory:
   ```
   cd express-blog-api
   ```
3. Install dependencies using npm:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the API at `http://localhost:4000`.
3. Use an API client like Postman to perform CRUD operations on blog posts.

## API Endpoints
- **GET /posts**: Retrieve all existing blog posts.
- **GET /posts/:id**: Retrieve a specific blog post by its ID.
- **POST /posts**: Add a new blog post.
- **PATCH /posts/:id**: Update a specific parameter of a blog post.
- **DELETE /posts/:id**: Delete a blog post by its ID.

## Data Format
- Each blog post object contains the following fields:
  - `id`: Unique identifier for the post.
  - `title`: Title of the post.
  - `content`: Content of the post.
  - `author`: Author of the post.
  - `date`: Date and time when the post was created.
