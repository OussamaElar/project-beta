const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParser = require('body-parser');



app.get("/", (req, res) => res.send("fucking work!!"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// middleware for body-parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection 
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
 
// Routes 
app.use("/api/users", users);

