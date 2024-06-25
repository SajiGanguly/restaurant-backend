// const { restaurants } = require("../data");

// function findRestaurantById(restaurantID) {
//   return restaurants.find((r) => r.restaurantID === restaurantID);
// }

// function bookTable(restaurantId, tableId, userId) {
//   console.log(
//     `Booking table ${tableId} in restaurant ${restaurantId} for user ${userId}`
//   );
//   const restaurant = findRestaurantById(restaurantId);
// console.log(restaurant);
//   if (!restaurant) {
//     return { error: `Restaurant ${restaurantId} not found` };
//   }

//   const table = restaurant.tables.find((t) => t.tableID === tableId);

//   if (!table) {
//     return {
//       error: `Table ${tableId} in restaurant ${restaurantId} not found`,
//     };
//   }

//   table.bookedBy = userId;
//   return {
//     message: `Table ${tableId} in restaurant ${restaurantId} booked by user ${userId}`,
//   };
// }

// module.exports = {
//   findRestaurantById,
//   bookTable,
// };
