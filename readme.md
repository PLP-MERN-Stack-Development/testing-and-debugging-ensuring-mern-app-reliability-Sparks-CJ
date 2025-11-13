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
