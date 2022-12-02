/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const productData = [
      {
        article: 10000001, title: 'Стул', description: 'Красивый и удобный стул, подходящий для любого интерьера', count: 50, price: 999, idCategory: 1,
      },
      {
        article: 10000002, title: 'Стол', description: 'Красивый и удобный стол, подходящий для любого интерьера', count: 35, price: 4999, idCategory: 1,
      },
      {
        article: 10000003, title: 'Табурет', description: 'Красивый и удобный табурет, подходящий для любого интерьера', count: 150, price: 499, idCategory: 1,
      },
      {
        article: 10000004, title: 'Фиолетовые обои', description: 'Фиолетовые обои для вашей квартиры', count: 300, price: 1999, idCategory: 2,
      },
      {
        article: 10000005, title: 'Синие обои', description: 'Синие обои для вашей квартиры', count: 400, price: 2999, idCategory: 2,
      },
      {
        article: 10000006, title: 'Зеленые обои', description: 'Зеленые обои для вашей квартиры', count: 500, price: 3999, idCategory: 2,
      },
      {
        article: 10000007, title: 'Дрель', description: 'Ремонтный инструмент - дрель', count: 250, price: 3999, idCategory: 3,
      },
      {
        article: 10000008, title: 'Молоток', description: 'Забиватель гвоздей', count: 350, price: 999, idCategory: 3,
      },
      {
        article: 10000009, title: 'Отвертка', description: 'Крестовая отвертка', count: 150, price: 999, idCategory: 3,
      },
    ];
    const products = productData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products');
  },
};
