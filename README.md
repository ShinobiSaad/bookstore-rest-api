# Bookstore REST CRUD API

This is a RESTful API for an online bookstore built using Node.js and Express.js.

## Features

- CRUD operations for books
- Search for books by title, author, or genre
- Add books to a shopping cart and place an order
- View order history
- Authentication using JWT
- Documentation using Swagger
- Docker support for easy deployment

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShinobiSaad/bookstore-rest-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookstore-rest-crud-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables: if you want your own mongodb cluster use that exact credentials

   ```
   PORT=3000
   ADMIN_USERNAME = 'saad'
   ADMIN_PASSWORD = '#$aAdTestDB34'
   ```

   Replace `your_mongodb_uri` and `your_jwt_secret` with your actual values.

5. Start the server:

   ```bash
   npm run dev
   ```

   The server will start on port 3000 by default.

## API Documentation

You can access the API documentation using Swagger UI at `http://localhost:3000/api-docs`.

## Deployment

To deploy the application using Docker:

1. Build the Docker image:

   ```bash
   docker build -t bookstore-app .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 -d bookstore-app
   ```

   Replace `bookstore-app` with the desired name for your Docker image.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

