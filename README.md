# Babycare

A Node.js application following the MVC (Model-View-Controller) pattern with authentication and session management using Express, MongoDB, express-session, password-validator, and bcrypt.

## Features

- User authentication (Signup, Login, Logout)
- Password hashing with bcrypt
- Session management using express-session
- Secure password validation with password-validator
- Follows MVC architecture
- Uses MongoDB as the database

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- express-session
- password-validator
- bcrypt
- dotenv

## Authentication Flow

1. User registers with a secure password (validated using `password-validator`).
2. Password is hashed using `bcrypt` before storing it in MongoDB.
3. On login, the password is verified against the hashed password.
4. User session is maintained using `express-session`.
5. Users can log out, clearing the session.

## License

This project is licensed under the MIT License.
