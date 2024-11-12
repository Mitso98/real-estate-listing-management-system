<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
- **Description**: Retrieve a list of all real estate listings.
- **Response**:
  - `200 OK`: Returns an array of listing objects.

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
  - `price` (number): The price of the listing.
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