const router = require('express').Router();
const path = require('path');
const db = require('../db/models');

router.get('/profile', async (req, res) => {
  // const id = req.session.userId;
  // // const id = 1;
  // if (id) {
  //   const orders = await db.Order.findAll({ where: { idUser: id } });
  //   res.json(orders);
  // } else {
  //   res.json({ error: { message: 'У вас нет заказов' } });
  // }
  const orders = await db.Order.findAll({
    include: {
      model: db.User,
      attributes: ['email', 'name', 'surname', 'phone'],
      raw: true,
    },
  });
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

router.put('/order/:idOrder', async (req, res) => {
  const { idOrder } = req.params;
  const { status } = req.body;

  const result = await db.Order.update({
    status,
  }, {
    where: { id: Number(idOrder) },
    raw: true,
  });
  res.json({ id: idOrder, status });
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
    images,
    count,
    price,
  } = req.body;
  console.log(images);
  try {
    const newProduct = await db.Product.create({
      article: Number(article),
      title,
      description,
      idCategory: Number(category),
      count: Number(count),
      price: Number(price),
    });

    images.forEach(async (img) => {
      await db.Image.create({
        idProduct: newProduct.dataValues.id,
        path: img.path,
      });
    });
    newProduct.dataValues.images = images;
    console.log(newProduct);
    res.json(newProduct);
  } catch (e) {
    console.log(e.message);
  }
  res.end();
});

router.post('/images', async (req, res) => {
  const fileArray = (Array.isArray(req.files.homesImg)) ? req.files.homesImg : [req.files.homesImg];
  const newArr = fileArray.map((ph) => {
    const fileSize = ph.size;
    const extension = path.extname(ph.name);
    const allowedExtensions = /.png|.jpeg|.jpg|.gif|.webp/;
    if (!allowedExtensions.test(extension)) {
      return ('Unsupported extension !');
    }
    if (fileSize > 5000000) {
      return ('File must be less than 5MB');
    }
    const { md5 } = ph;

    const URL = `/upload/${md5}${extension}`;

    ph.mv(`./public${URL}`, (err) => {
      if (err) { return res.status(500).send(err); }
      return URL;
    });
    return URL;
  });
  console.log(newArr);
  res.json(newArr);
});

router.get('/category', async (req, res) => {
  const categories = await db.Category.findAll({ raw: true });
  res.json(categories);
});
router.delete('/product/:id', async (req, res) => {
  const { id } = req.params;
  await db.Image.destroy({ where: { idProduct: id } });
  await db.Product.destroy({ where: { id } });
  res.json(Number(id));
});

router.put('/product/:id', async (req, res) => {
  const {
    id,
    article,
    title,
    description,
    category,
    images,
    count,
    price,
  } = req.body;
  await db.Product.update({
    article: Number(article),
    title,
    description,
    idCategory: Number(category),
    count: Number(count),
    price: Number(price),
  }, { where: { id } });
  const newProduct = await db.Product.findOne({ where: { id } });
  await db.Image.destroy({ where: { idProduct: id } });

  images.forEach(async (img) => {
    await db.Image.create({
      idProduct: newProduct.dataValues.id,
      path: img.path,
    });
  });
  newProduct.dataValues.images = images;
  res.json(newProduct);
});
module.exports = router;
