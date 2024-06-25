const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Restaurant = require("./Schemas/Restaurants");
const userRoutes = require("./Routes/userRoutes");
const loginRoutes = require('./Routes/loginRoutes');
const reservationRoutes = require('./Routes/reservationRoutes');
const bookingControllers = require('./Controllers/bookingControllers')


const connectDB = require("./db");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();


// app.use('/api', tableRoutes);
app.use("/", userRoutes);
app.use("/", loginRoutes);
app.use('/restaurantTables', reservationRoutes);


app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/alltherestaurants", async (req, resp) => {
  try {
    const allrestaurants = await Restaurant.find({});
    console.log(allrestaurants);
    resp
      .status(200)
      .json({ message: "Data Fetched Successfully", data: allrestaurants });
    // console.log(allrestaurants);
  } catch (err) {
    resp.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
