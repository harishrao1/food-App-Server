# Swiggy Clone API

This project provides a simple Express.js API to interact with the Swiggy platform.

## Usage

1. Start the server: `npm start`
2. Access the API endpoints:
   - `GET /api/restaurants`: Get restaurants near a location.
   - `GET /api/menu`: Get the menu of a specific restaurant.
   - `GET /location`: Search for locations.
   - `GET /addresses`: Get address recommendations.

## API Endpoints

- `/api/restaurants`: Retrieve restaurants near a location.
  - Query Parameters:
    - `lat`: Latitude of the location.
    - `lng`: Longitude of the location.

- `/api/menu`: Retrieve the menu of a specific restaurant.
  - Query Parameters:
    - `lat`: Latitude of the location.
    - `lng`: Longitude of the location.
    - `restaurantId`: ID of the restaurant.

- `/location`: Search for locations.
  - Query Parameters:
    - `input`: Input for location search.

- `/addresses`: Get address recommendations.
  - Query Parameters:
    - `place_id`: Place ID for the location.


