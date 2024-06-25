
const Restaurant = require("../Schemas/Reservations");

async function printTablesData(req, res) {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      console.log('Restaurant not found');
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    console.log('All Tables for Restaurant:');
    const tables = restaurant.tables.map(table => {
      console.log(`Table Number: ${table.tableNumber}`);
      console.log(`Seating Capacity: ${table.seatingCapacity}`);
      console.log(`Is Available: ${table.isAvailable}`);
      console.log(`Booked By: ${table.bookedBy}`);
      console.log('--------------------------');
      return {
        tableNumber: table.tableNumber,
        seatingCapacity: table.seatingCapacity,
        isAvailable: table.isAvailable,
        bookedBy: table.bookedBy
      }
    });

    res.status(200).json({ tables });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  printTablesData
};
