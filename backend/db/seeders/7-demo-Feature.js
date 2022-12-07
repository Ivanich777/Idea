/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const featuresData = [
      {
        idProduct: 1, title: 'Вес', description: '1,5кг',
      },
      {
        idProduct: 1, title: 'Цвет', description: 'Коричневый',
      },
      {
        idProduct: 1, title: 'Материал', description: 'Дерево',
      },
      {
        idProduct: 2, title: 'Вес', description: '2,5кг',
      },
      {
        idProduct: 2, title: 'Цвет', description: 'Бежевый',
      },
      {
        idProduct: 2, title: 'Материал', description: 'Дерево',
      },
    ];
    const features = featuresData.map((feature) => ({
      ...feature,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Features', features);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Features');
  },
};
