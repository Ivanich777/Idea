const router = require('express').Router();
const db = require('../db/models');
const Product = require('../db/models/product');

router.get('/profile', async (req, res) => {
  // const id = req.session.userId;
  const id = 1;
  const orders = await db.Order.findAll({ where: { idUser: id } });
  res.json(orders);
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

module.exports = router;
