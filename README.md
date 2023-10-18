# Product Catalog API

This API provides endpoints for managing a product catalog.

## Getting Started

To get started with this API, you'll need to have Node.js and MongoDB installed on your machine. You can download Node.js from the official website, and MongoDB from the MongoDB website.

Once you have those installed, you can clone this repository and run the following commands:

```bash
npm install
npm start
```

This will install all the dependencies for the project and start the server. You can then access the API at http://localhost:3000.

## API Endpoints

The following endpoints are available:

### GET /products

Returns a list of all products in the catalog.

### GET /products/:id

Returns a single product from the catalog.

### POST /products

Creates a new product in the catalog.

### PUT /products/:id

Updates a product in the catalog.

### DELETE /products/:id

Deletes a product from the catalog.

## Running the Tests

To run the tests for this API, run the following command:

```bash
npm test
```

## Built With

* [Node.js](https://nodejs.org/en/) - The JavaScript runtime used
