const router = require('express').Router();
const db = require('../db/models');

router.get('/profile', async (req, res) => {
  const id = req.session.userId;
  // const id = 1;
  const orders = await db.Order.findAll({ where: { idUser: id } });
  res.json(orders);
});

router.get('/order/:idOrder', async (req, res) => {
  const { idOrder } = req.params;
  const orderItems = await db.OrderItem.findAll({
    include: {
      model: db.Product,
      attributes: ['title', 'price'],
    },
    where: { idOrder },
    raw: true,
  });
  res.json(orderItems);
});

router.get('/products', async (req, res) => {
  try {
    const products = await db.Product.findAll({
      include: [{
        model: db.Image,
        attributes: ['path'],
      }],
    });
    // console.log(products);
    res.json(products);
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/category', async (req, res) => {
  const categories = await db.Category.findAll({ raw: true });
  res.json(categories);
});

module.exports = router;
