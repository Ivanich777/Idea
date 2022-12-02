const router = require('express').Router();
const db = require('../db/models');

router.get('/profile', async (req, res) => {
  const id = req.session.userId;
  const orders = await db.Order.findAll({ where: { id } });
  res.json(orders);
});

module.exports = router;
