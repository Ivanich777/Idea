/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const imagesData = [
      {
        idProduct: 1, path: 'https://annihaus.ru/upload/iblock/561/56166c4717cd3ab25b0d15e598f82fb7.jpg',
      },
      {
        idProduct: 1, path: 'https://annihaus.ru/upload/iblock/573/5732555d8f164b8c010333f681b75360.jpg',
      },
      {
        idProduct: 2, path: 'https://basket-03.wb.ru/vol382/part38235/38235535/images/big/1.jpg',
      },
      {
        idProduct: 2, path: 'https://karaganda.mebel-domu.ru/upload/iblock/7b5/7b55171c709363a85107f20f954a86d5.jpg',
      },
      {
        idProduct: 3, path: 'https://lukoshko70.ru/images/detailed/11/DSC_3674.jpg',
      },
      {
        idProduct: 3, path: 'https://cs2.livemaster.ru/storage/35/61/3e7a30515456ff4910ef16b5b7l9--dlya-doma-i-interera-taburetka-derevyannaya-taburet-dlya-kuhn.jpg',
      },
      {
        idProduct: 4, path: 'https://ae04.alicdn.com/kf/H4f20250754cb43fdb5b093306326baa4H.jpg',
      },
      {
        idProduct: 4, path: 'https://ae04.alicdn.com/kf/HTB1Ei0aiwDD8KJjy0Fdq6AjvXXav/3D.jpg',
      },
      {
        idProduct: 5, path: 'https://torg-oboi.ru/upload/iblock/3a9/lv37vk3bzl0ctk050tba2yxt4z1q0k3z/siniy_2.jpg',
      },
      {
        idProduct: 5, path: 'https://oboi-store.ru/files/uploads/sinie_oboi_v_interiere.jpeg',
      },
      {
        idProduct: 6, path: 'https://tytdesign.info/wp-content/uploads/2019/03/Zelenye-oboi-43.jpg',
      },
      {
        idProduct: 6, path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJGiyyn1-qzcfemhs8sM6XE5mGRYMK5zYkeinysWTSl55VPiQuPscrMPvPTCaCW9d4Pw&usqp=CAU',
      },
      {
        idProduct: 7, path: 'https://api.volta.md/media/images/8c84b9b1-8a00-11e5-838c-0030489f37dc.jpg',
      },
      {
        idProduct: 7, path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-8VYubqNvHynmtA2d4mqz-aytTYtHsoYLDBlGOr15Fct15h-Q_G7PNNGekKbcmfjT8Y&usqp=CAU',
      },
      {
        idProduct: 8, path: 'https://res.cloudinary.com/lmru/image/upload/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/v1/LMCode/82116378.jpg',
      },
      {
        idProduct: 8, path: 'https://images.satu.kz/61717442_w919_h430_molotok-slesarnyj-500.jpg',
      },
      {
        idProduct: 9, path: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1490073076/lmcode/iVyWMyaAGkWezZXGWyV0eQ/18147650.jpg',
      },
      {
        idProduct: 9, path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDbUurNFC9DzsUdZcsCryMrdxn7nAop9lCa71Ah95rGwP1CyhqJarlJQyk0_5wzfXIm4&usqp=CAU',
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
