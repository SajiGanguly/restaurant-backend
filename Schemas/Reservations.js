
const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableID: String,
  seatingCapacity: Number,
  isAvailable: Boolean,
  bookedBy: String,
}, { _id: false });

const openHoursSchema = new mongoose.Schema({
  day: { type: String, required: true },
  open: { type: String, required: true },
  close: { type: String, required: true }
}, { _id: false });

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  openHours: { type: [openHoursSchema], required: true },
  image_path: String,
  tables: [tableSchema] 
}, { collection: 'Restaurants' });

const ReservationTables = mongoose.model(" ReservationTables", restaurantSchema);



module.exports = ReservationTables;
