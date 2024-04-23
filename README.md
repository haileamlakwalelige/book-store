# MERN Stack Book Management System

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books stored in a MongoDB database.

## Table of Contents

1. [Backend](#backend)
    - [Setup](#backend-setup)
    - [API Endpoints](#api-endpoints)
2. [Frontend](#frontend)
    - [Setup](#frontend-setup)
    - [Usage](#frontend-usage)
3. [Contributing](#contributing)
4. [License](#license)

## Backend

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the `backend` directory:
   ```bash
   cd server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   PORT=3000
   MONGODB_URL=<your-mongodb-connection-string>
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### API Endpoints

- `GET /books`: Get all books
- `POST /books`: Create a new book
- `PUT /books/:id`: Update a book by ID
- `DELETE /books/:id`: Delete a book by ID

## Frontend

### Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Usage

- Open your web browser and go to `http://localhost:3000` to access the frontend application.
- You can view, add, update, and delete books using the frontend interface.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
