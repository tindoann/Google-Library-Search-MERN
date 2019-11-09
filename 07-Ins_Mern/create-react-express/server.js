const express = require("express");
const path = require("path");
const routes = require("./routes"); 
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes); 

//Connect to our Mongoose database.
const mongoRoute = process.env.MONGODB_URI || `mongodb://localhost/googlebooks`;
mongoose.Promise = global.Promise;
mongoose.connect(mongoRoute);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// server
