const router = require('express').Router();
const db = require('../db/models');

router.get('/profile', async (req, res) => {
  const id = req.session.userId;
  // const id = 1;
  if (id) {
    const orders = await db.Order.findAll({ where: { idUser: id } });
    res.json(orders);
  } else {
    res.json({ error: { message: 'У вас нет заказов' } });
  }
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
    res.json(products);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/product', async (req, res) => {
  const {
    article,
    title,
    description,
    category,
    image,
    count,
    price,
  } = req.body;
  try {
    const newProduct = await db.Product.create({
      article: Number(article),
      title,
      description,
      idCategory: Number(category),
      count: Number(count),
      price: Number(price),
    });
    await db.Image.create({
      idProduct: newProduct.dataValues.id,
      path: image,
    });
    newProduct.dataValues.Images = [{ path: image }];
    console.log(newProduct);
    res.json(newProduct);
  } catch (e) {
    console.log(e.message);
  }
  res.end();
});

router.get('/category', async (req, res) => {
  const categories = await db.Category.findAll({ raw: true });
  res.json(categories);
});

module.exports = router;
