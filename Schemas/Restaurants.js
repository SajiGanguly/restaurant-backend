const mongoose = require("mongoose");


const openHoursSchema = new mongoose.Schema({
  day: { type: String, required: true },
  open: { type: String, required: true },
  close: { type: String, required: true }
}, { _id: false });


const tableSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true, default: true },
  bookedBy: { type: String, default: "" }
}, { _id: false });


const restaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  openHours: { type: [openHoursSchema], required: true },
  image_path: String,
  tables: { type: [tableSchema], required: true }
}, { collection: 'Restaurants' });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;