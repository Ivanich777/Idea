const router = require('express').Router();
const path = require('path');
const db = require('../db/models');

router.get('/profile', async (req, res) => {
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
  // res.setHeader('Acess-Control-Allow-Origin', '*');
  try {
    const products = await db.Product.findAll({
      include: [{
        model: db.Image,
        attributes: ['path'],
      }, {
        model: db.Feature,
        attributes: ['title', 'description'],
      }, {
        model: db.Category,
        attributes: ['title'],
      }, {
        model: db.OrderItem,
        attributes: ['idOrder'],
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
    categoryId,
    images,
    count,
    price,
    features,
  } = req.body;
  console.log(images);
  try {
    const newProduct = await db.Product.create({
      article: Number(article),
      title,
      description,
      idCategory: Number(categoryId),
      count: Number(count),
      price: Number(price),
    });

    images.forEach(async (img) => {
      await db.Image.create({
        idProduct: newProduct.dataValues.id,
        path: img.path,
      });
    });

    features.forEach(async (feature) => {
      await db.Feature.create({
        idProduct: newProduct.dataValues.id,
        title: feature.title,
        description: feature.description,
      });
    });

    newProduct.dataValues.images = images;
    newProduct.dataValues.features = features;
    newProduct.dataValues.category = category;
    newProduct.dataValues.isDeletable = true;
    res.json(newProduct);
  } catch (e) {
    console.error(e.message);
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
  res.json(newArr);
});

router.get('/category', async (req, res) => {
  const categories = await db.Category.findAll({ raw: true });
  res.json(categories);
});

router.delete('/product/:id', async (req, res) => {
  const { id } = req.params;
  await db.Image.destroy({ where: { idProduct: id } });
  await db.Feature.destroy({ where: { idProduct: id } });
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
    categoryId,
    features,
    count,
    price,
  } = req.body;
  try {
    await db.Product.update({
      article: Number(article),
      title,
      description,
      idCategory: Number(categoryId),
      count: Number(count),
      price: Number(price),
    }, { where: { id } });
    const newProduct = await db.Product.findOne({ where: { id } });
    await db.Feature.destroy({ where: { idProduct: id } });
    features.forEach(async (feature) => {
      await db.Feature.create({
        idProduct: newProduct.dataValues.id,
        title: feature.title,
        description: feature.description,
      });
    });
    newProduct.dataValues.features = features;
    newProduct.dataValues.category = category;
    res.json(newProduct);
  } catch (error) {
    console.error(error.meassage);
  }
});

router.delete('/basket/:id', async (req, res) => {
  const { id } = req.params;
  await db.OrderItem.destroy({ where: { idProduct: id } });
});

router.post('/basket', async (req, res) => {
  const { idProduct, userId } = req.body;
  const order = await db.Order.findOne({ where: { idUser: userId, status: 'Не оформлен' } });
  if (order) {
    const currentOrderItem = await db.OrderItem.findOne({
      where: {
        idOrder: order.id,
        idProduct,
      },
    });
    if (currentOrderItem) {
      await db.OrderItem.update({
        count: currentOrderItem.count + 1,
      }, { where: { idProduct, idOrder: order.id } });

      const currentRow = await db.OrderItem.findOne({ where: { idProduct, idOrder: order.id } });
      return res.json(currentRow);
    }

    const newItem = await db.OrderItem.create({
      idProduct,
      count: 1,
      idOrder: order.id,
    });

    return res.json(newItem);
  }
  const newOrder = await db.Order.create({
    idUser: userId,
    status: 'Не оформлен',
  });
  const newItem = await db.OrderItem.create({
    idProduct,
    count: 1,
    idOrder: newOrder.id,
  });

  return res.json(newItem);
});

router.get('/basket', async (req, res) => {
  const { id } = req.query;
  const order = await db.Order.findOne({ where: { idUser: id, status: 'Не оформлен' } });
  if (order) {
    const basket = await db.OrderItem.findAll({ where: { idOrder: order.id }, order: [['createdAt']] });
    return res.json(basket);
  }
  return res.json();
});

router.put('/makeOrder', async (req, res) => {
  const { id } = req.body;
  await db.Order.update({ status: 'Принят' }, { where: { id } });
  const updateOrder = await db.Order.findAll({ where: { id } });
  res.json(updateOrder);
});

router.put('/decreaseCount', async (req, res) => {
  const { id } = req.body;
  const actualOrderItem = await db.OrderItem.findOne({ where: { id } });
  await db.OrderItem.update({ count: Number(actualOrderItem.count) - 1 }, { where: { id } });
  const updateOrderItems = await db.OrderItem.findAll({
    where: {
      idOrder: actualOrderItem.idOrder,
    },
    order: [['createdAt']],
  });
  res.json(updateOrderItems);
});

router.put('/increaseCount', async (req, res) => {
  const { id } = req.body;
  const actualOrderItem = await db.OrderItem.findOne({ where: { id } });
  await db.OrderItem.update({ count: Number(actualOrderItem.count) + 1 }, { where: { id } });
  const updateOrderItems = await db.OrderItem.findAll({
    where: {
      idOrder: actualOrderItem.idOrder,
    },
    order: [['createdAt']],
  });
  res.json(updateOrderItems);
});

module.exports = router;
