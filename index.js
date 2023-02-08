const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://robcatlin:0XIRkt9lwgDkxorr@cluster0.ft5dl5y.mongodb.net/?retryWrites=true&w=majority";

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

app.get("/", (req, res) => {
  res.send("Server is up and running dawg!");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
