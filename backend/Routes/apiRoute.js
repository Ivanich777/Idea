const router = require('express').Router();
const db = require('../db/models');

router.get('/profile', async (req, res) => {
  // const id = req.session.userId;
  const id = 1;
  const orders = await db.Order.findAll({ where: { idUser: id } });
  res.json(orders);
});

module.exports = router;
