/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const imagesData = [
      {
        idProduct: 1, path: 'http://localhost:4000/upload/56166c4717cd3ab25b0d15e598f82fb7.jpg',
      },
      {
        idProduct: 1, path: 'http://localhost:4000/upload/5732555d8f164b8c010333f681b75360.jpg',
      },
      {
        idProduct: 2, path: 'http://localhost:4000/upload/1.jpg',
      },
      {
        idProduct: 2, path: 'http://localhost:4000/upload/2.jpg',
      },
      {
        idProduct: 3, path: 'http://localhost:4000/upload/3.jpg',
      },
      {
        idProduct: 3, path: 'http://localhost:4000/upload/4.jpg',
      },
      {
        idProduct: 4, path: 'http://localhost:4000/upload/5.webp',
      },
      {
        idProduct: 4, path: 'http://localhost:4000/upload/6.jpg',
      },
      {
        idProduct: 5, path: 'http://localhost:4000/upload/7.jpg',
      },
      {
        idProduct: 5, path: 'http://localhost:4000/upload/8.jpeg',
      },
      {
        idProduct: 6, path: 'http://localhost:4000/upload/9.jpg',
      },
      {
        idProduct: 6, path: 'http://localhost:4000/upload/10.jpeg',
      },
      {
        idProduct: 7, path: 'http://localhost:4000/upload/11.jpg',
      },
      {
        idProduct: 7, path: 'http://localhost:4000/upload/12.jpeg',
      },
      {
        idProduct: 8, path: 'http://localhost:4000/upload/13.webp',
      },
      {
        idProduct: 8, path: 'http://localhost:4000/upload/14.webp',
      },
      {
        idProduct: 9, path: 'http://localhost:4000/upload/15.jpg',
      },
      {
        idProduct: 9, path: 'http://localhost:4000/upload/16.jpeg',
      },
    ];
    const images = imagesData.map((image) => ({
      ...image,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Images', images);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Images');
  },
};
