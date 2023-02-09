const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://robcatlin:dyb55nsFpcBdE12kMY5q9z4FEpXvNE@cluster0.jo9w9oa.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const user = new User({
  username: "Rob",
  password: "12345",
});

user.save((error) => {
  if (error) throw error;
  console.log("New user has been added to the database");
});

app.get("/", (req, res) => {
  res.send("Server is up and running dawg!");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
