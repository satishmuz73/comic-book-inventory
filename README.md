# Comic Book Backend API

This project is a backend API built using Node.js, Express.js, and MongoDB to manage comic book inventory for an e-commerce store. It supports features such as comic book creation, updating, deletion, fetching comic books (with pagination, filtering, and sorting), and fetching specific comic book details.

## Features

- Create a comic book: Add new comic book records.
- Fetch all comic books: Get all comic books with pagination, sorting, and filtering.
- Fetch a specific comic book by ID: Retrieve details of a comic book by its ID.
- Update a comic book: Edit specific fields of an existing comic book by its ID.
- Delete a comic book: Remove a comic book from the inventory.

## Technologies Used

- Node.js: JavaScript runtime for building the backend.
- Express.js: Web framework for building the API.
- MongoDB: NoSQL database for storing comic books data.
- Mongoose: MongoDB object modeling tool for Node.js.
- dotenv: For environment variable management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satishmuz/comic-book-store-backend.git


# Comic Book Inventory API

This project is a RESTful API for managing comic book inventory. It includes functionalities like comic book creation, fetching all comics (with pagination, filtering, and sorting), fetching specific comic book details, updating comic book fields, and deleting a comic book. The API is built with **Node.js**, **Express.js**, and **MongoDB**.

## API Endpoints

| Method   | Endpoint                        | Description                           |
|----------|---------------------------------|---------------------------------------|
| POST     | `/Comic`                        | Create a new comic book               |
| GET      | `/Comic/comics`                 | Fetch all comic books                 |
| GET      | `/Comic/comicsSepcific/:id`     | Fetch a specific comic book by ID     |
| PUT      | `/Comic/comicsUpdate/:id`       | Update a comic book by ID             |
| DELETE   | `/Comic/comicsDel/:id`          | Delete a comic book by ID             |

## Request Parameters

### Pagination, Sorting, and Filtering (GET `/Comic/comics`):

- `page` (optional): Page number (default: `1`)
- `limit` (optional): Number of comics per page (default: `10`)
- `sortBy` (optional): Field to sort by (default: `book_name`)
- `order` (optional): Sorting order (`asc` or `desc`, default: `asc`)
