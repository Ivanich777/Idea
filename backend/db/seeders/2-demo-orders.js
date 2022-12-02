/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const orderData = [
      {
        idUser: 1, status: 'Завершен',
      },
      {
        idUser: 1, status: 'В обработке',
      },
      {
        idUser: 1, status: 'Отменен',
      },
      {
        idUser: 1, status: 'Принят',
      },
    ];
    const orders = orderData.map((order) => ({
      ...order,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Orders', orders);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders');
  },
};
