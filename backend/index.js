require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const route = require("./routes/route");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

(async () => {
  try {
    await mongoose
      .connect(MONGO_URL)
      .then(() => console.log("MongoDB is connected successfully"));
    app.listen(PORT, () => {
      console.log(`App is listining to port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MONGODB connection ERROR", error);
    throw error;
  }
})();

// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("MongoDB is connected successfully"))
//   .catch((e) => console.error(e));

// app.listen(PORT, () => {
//   console.log(`App is listining to port http://localhost:${PORT}`);
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api", route);
