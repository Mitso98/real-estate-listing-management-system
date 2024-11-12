## Description

The Real Estate Listing Management System is a backend built using the NestJS framework.
It allows users to manage real estate listings, doing basic CRUDS.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

### Build the Docker Image

To build the Docker image for the application, run the following command in the root directory of your project:

1. **Build the Docker image**:
    ```sh
    docker build -t management-system .
    ```

2. **Run the Docker container**:
    ```sh
    docker run -p 3000:3000 management-system
    ```

This process will package your NestJS application into a Docker container and run it, making it easy to deploy and manage.

## Listing API Documentation

### Endpoints

#### Get All Listings

- **URL**: `/listing`
- **Method**: `GET`
- **Description**: Retrieve a list of all real estate listings with optional searching, sorting, and pagination.
- **Query Params**:
  - `search` (string, optional): Search term to filter listings by title or description.
  - `page` (number, optional): Page number for pagination.
  - `pageSize` (number, optional): Number of listings to return per page.
  - `sortBy` (string, optional): Field to sort listings by (e.g., `price`).
  - `sortOrder` (string, optional): Sort order for listings (`asc` or `desc`).
  - `search` (string, optional): Search term to filter listings by any of its values.
- **Response**:
  - `200 OK`: Returns an array of listing objects with pagination metadata.

#### Get Listing by ID

- **URL**: `/listing/:id`
- **Method**: `GET`
- **Description**: Retrieve a single real estate listing by its ID.
- **URL Params**: 
  - `id` (string): The ID of the listing.
- **Response**:
  - `200 OK`: Returns the listing object.
  - `404 Not Found`: Listing not found.

#### Create a New Listing

- **URL**: `/listing`
- **Method**: `POST`
- **Description**: Create a new real estate listing.
- **Request Body**:
  - `title` (string): The title of the listing.
  - `description` (string): The description of the listing.
  - `price` (number): The price of the listing.
  - `currency` (string): The currency of the price.
  - `location` (string): The location of the listing.
- **Response**:
  - `201 Created`: Returns the created listing object.
  - `400 Bad Request`: Invalid request data.

#### Update a Listing

- **URL**: `/listing/:id`
- **Method**: `PUT`
- **Description**: Update an existing real estate listing.
- **URL Params**: 
  - `id` (string): The ID of the listing.
- **Request Body**:
  - `title` (string): The title of the listing.
  - `description` (string): The description of the listing.
  - `price` (number): The price of the listing if price is provided currency must be provided too.
  - `currency` (string): The currency of the price.
  - `location` (string): The location of the listing.
- **Response**:
  - `200 OK`: Returns the updated listing object.
  - `400 Bad Request`: Invalid request data.
  - `404 Not Found`: Listing not found.

#### Delete a Listing

- **URL**: `/listing/:id`
- **Method**: `DELETE`
- **Description**: Delete a real estate listing.
- **URL Params**: 
  - `id` (string): The ID of the listing.
- **Response**:
  - `204 No Content`: Listing successfully deleted.
  - `404 Not Found`: Listing not found.