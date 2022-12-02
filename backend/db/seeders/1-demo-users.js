/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const userData = [
      {
        email: 'qwe@qwe.ru', password: await bcrypt.hash('123123123', 10), name: 'Sasha', surname: 'Averyanova', admin: false, phone: '+79218821165',
      },
      {
        email: 'admin@admin.ru', password: await bcrypt.hash('123123123', 10), name: 'Admin', surname: 'Adminovich', admin: true, phone: '+79218821165',
      },
    ];
    const users = userData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
