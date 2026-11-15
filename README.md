DogDirectory is a simple web application that allows users to explore different dog breeds and learn more about their characteristics.

Users can browse a collection of dog breeds, view their photos and temperaments, and select a breed to see more detailed information.

Features:
1. Browse a list of dog breeds.
2. View breed photos, names, and temperaments.
3. Select a breed to see detailed information.
4. View breed origin, life expectancy, breed group.
5. Navigate between the breed list and individual breed details.

Technologies:
HTML
CSS
JavaScript
Vite
TheDogAPI
API

TheDogAPI documentation:
https://docs.thedogapi.com/

This project uses TheDogAPI to retrieve dog breed information.
Two API endpoints:

Get all breeds: GET /v1/breeds
Get breed details: GET /v1/breeds/{breedId}

When a user selects a breed, the application makes a new GET request to retrieve its details.

How it works:
1. Node.js and npm installed.
2. Get API key from TheDogAPI.

Installation:
1. Clone the repo:
   git clone https://github.com/ksen1234/dog-directory.git
2. Navigate to the project directory:
   cd dog-directory
3. Install dependencies:
   npm install
4. Create an .env file in the root directory and add your API key:
   VITE_DOG_API_KEY=your_api_key
5. Start the development server:
   npm run dev
6. Open the local URL displayed in your terminal 
   