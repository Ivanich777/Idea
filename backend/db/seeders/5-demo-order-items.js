/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const orderItemsData = [
      {
        idProduct: 1, count: 1, idOrder: 1,
      },
      {
        idProduct: 2, count: 3, idOrder: 2,
      },
      {
        idProduct: 3, count: 2, idOrder: 3,
      },
      {
        idProduct: 4, count: 7, idOrder: 4,
      },
      {
        idProduct: 5, count: 4, idOrder: 1,
      },
      {
        idProduct: 6, count: 8, idOrder: 2,
      },
      {
        idProduct: 7, count: 4, idOrder: 3,
      },
      {
        idProduct: 8, count: 3, idOrder: 4,
      },
      {
        idProduct: 9, count: 1, idOrder: 1,
      },
    ];
    const orderItems = orderItemsData.map((orderItem) => ({
      ...orderItem,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('OrderItems', orderItems);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('OrderItems');
  },
};
