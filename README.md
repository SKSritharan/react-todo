# Todo application

This is a simple Todo application built with React for the frontend and Express for the backend. It allows users to add, delete, and manage their tasks. The application uses MongoDB as the database to store the tasks.

## How To Run

1. Clone the repository

2. Set the Atlas URI connection parameter in server/.env to your Connection String:
   `MONGODB_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

3. Start the Express server:
   `cd server
npm install
npm run dev`

4. Start the React app (in a new terminal window):
   `cd app
npm install
npm start`

5. Open your browser and navigate to `http://localhost:3000` to view the application.
