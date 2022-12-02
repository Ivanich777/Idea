/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const categoriesData = [
      {
        title: 'Мебель',
      },
      {
        title: 'Обои',
      },
      {
        title: 'Инструменты',
      },
    ];
    const categories = categoriesData.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Categories', categories);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories');
  },
};
