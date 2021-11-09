# Express, Typescript and MongoDB template


## What this template provides

- Ready to use docker-compose for developemnt and production with mongo service.
- Middlewares for validation and error-handling
- Suitable error handling strategy for easy use and extensibility
- One command development build with hot reloading for great development experience
- One command production build
- One command testing


## Quickstart

- Create Repository from this template
- Clone your repository

```
# for development build with hot reloading
docker-compose up

# or for production build
docker-compose -f docker-compose.prod.yml up
```
**Ready!!! Start Hacking :)**

## Test

Test libaries: 
 - jest
 - supertest
 - mongodb-memory-server
 - ts-jest.

To run test execute:
```
npm install
npm run test
```

## Technologies

- NodeJS
- Express
- Typescript
- MongoDB
- Docker