const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  console.log(req);
  res.send({
    token: "test123",
  });
});

// Logout

// Get all users from db -> students

// Generate uuid -> store in the db on users table and return uuid -> POST /chat {user_id:}

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
