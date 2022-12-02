/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,

      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      surname: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
      phone: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
