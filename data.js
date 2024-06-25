const restaurants = [
  {
    restaurantID: '1',
    name: 'Restaurant A',
    tables: [
      {
        tableID: 'T1',
        seatingCapacity: 2,
        isAvailable: true,
        bookedBy: '',
      },
      {
        tableID: 'T2',
        seatingCapacity: 4,
        isAvailable: true,
        bookedBy: '',
      },
    ],
  },
  {
    restaurantID: '2',
    name: 'Restaurant B',
    tables: [
      {
        tableID: 'T3',
        seatingCapacity: 2,
        isAvailable: true,
        bookedBy: '',
      },
      {
        tableID: 'T4',
        seatingCapacity: 4,
        isAvailable: true,
        bookedBy: '',
      },
    ],
  },
];

module.exports = { restaurants };
