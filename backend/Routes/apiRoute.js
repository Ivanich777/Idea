const router = require('express').Router();
const db = require('../db/models');
const Product = require('../db/models/product');

router.get('/profile', async (req, res) => {
  // const id = req.session.userId;
  const id = 1;
  const orders = await db.Order.findAll({ where: { idUser: id } });
  res.json(orders);
});

router.get('/order', async (req, res) => {
  // const id = req.session.userId;
  const id = 1;
  const orders = await db.Order.findAll({ where: { idUser: id } });
  // const orders2 = await db.Order.findAll({
  //   include: {
  //     model: db.OrderItem,
  //     attributes: ['idProduct', 'count'],
  //     raw: true,
  //   },
  //   where: {
  //     idUser: id,
  //   },
  //   raw: true,
  // });
  res.json(orders);
});

router.get('/products', async (req, res) => {
  try {
    const products = await db.Product.findAll({
      raw: true,
    });
    res.json(products);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
