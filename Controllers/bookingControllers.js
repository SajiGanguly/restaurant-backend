var ObjectId = require("mongodb").ObjectId;
const express = require("express");
const Restaurant = require("../Schemas/Restaurants");
const router = express.Router();

router.post("/book", async (req, res) => {
  const { selectedTable, selectedRestaurant, userID } = req.body;
  console.log(selectedTable, selectedRestaurant, userID);

  var objId = new ObjectId(selectedRestaurant);


  try {
    const query = {
      _id: objId,
      "tables.tableNumber": selectedTable,
    };
    const update = {
      $set: {
        "tables.$.bookedBy": userID,
        "tables.$.isAvailable": false,
      },
    };

    const result = await Restaurant.updateOne(query, update);

    if (result.modifiedCount === 0) { 
      console.log('Restaurant or table not found');
      return res.status(404).send("Restaurant or table not found");
  }

    console.log("Restaurant booked successfully");
    const theSelectedRestaurant = await Restaurant.findById(objId);
    console.log('Selected Restaurant:', theSelectedRestaurant);
    res.status(200).send("Restaurant Booked Successfully");
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(400).json(error);
  }
});

router.get("/booked-by/:userID", async (req, res) => {
  const userID = req.params.userID;
  console.log('UserID:', userID);

  try {
      
      const restaurants = await Restaurant.find({ "tables.bookedBy": userID });

      if (!restaurants || restaurants.length === 0) {
          console.log('No restaurants found for this user');
          return res.status(404).send("No restaurants found for this user");
      }

      console.log('Restaurants found:', restaurants);
      res.status(200).json(restaurants);
  } catch (error) {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;
