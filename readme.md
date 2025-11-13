# MERN App Testing & Debugging Assignment

## Overview
This project includes a comprehensive testing suite and debugging setup for a MERN stack application.

## Testing
- **Unit Tests:** React components, custom hooks, server utilities, and middleware
- **Integration Tests:** API endpoints for posts using Supertest
- **End-to-End Tests:** User flows using Cypress

### Running Tests
```bash
npm run install-all
npm run setup-test-db

# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration

# Run end-to-end tests only
npm run test:e2e


Testing Strategy

The MERN stack application is tested using a combination of unit, integration, and end-to-end tests to ensure reliability and correct functionality. Unit tests (using Jest and React Testing Library) validate individual React components, hooks, and server utilities in isolation. Integration tests (using Jest and Supertest with an in-memory MongoDB) verify API endpoints, database operations, and authentication flows. End-to-end tests (using Cypress) simulate real user interactions to confirm critical workflows such as login, post creation, and navigation work as expected. Debugging techniques, including global error handling on the server and React Error Boundaries on the client, enhance error tracking and application stability. This strategy ensures robust, maintainable, and production-ready code.



Debugging Techniques

The application implements multiple debugging strategies to ensure reliability and ease of maintenance. On the server-side, a global error handler captures unhandled exceptions, while console logging helps trace requests and errors. On the client-side, React Error Boundaries prevent component crashes, and console logs track state and API responses. Integration tests with Supertest and an in-memory MongoDB help debug API endpoints and database operations safely. Additionally, Chrome DevTools, breakpoints, and VSCode debugging are used to inspect network requests, variables, and component behavior, ensuring smooth real-time communication and proper application performance.
