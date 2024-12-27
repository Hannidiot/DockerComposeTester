# Docker Compose Demo

This is a simple demo project showing how to use Docker Compose with a Node.js backend, React frontend, and Nginx reverse proxy.

## Project Structure

- `app/` - Node.js backend
- `web/` - React frontend
- `nginx/` - Nginx reverse proxy configuration
- `docker-compose.yml` - Docker Compose configuration

## Running the Project

1. Make sure you have Docker and Docker Compose installed
2. Clone this repository
3. Run the following command in the project root:

```bash
docker-compose up --build
```

The application will be available at:

- Frontend: http://localhost
- Backend API: http://localhost/api

## API Endpoints

- GET `/api/hello` - Returns a hello message
- GET `/api/time` - Returns the current server time
