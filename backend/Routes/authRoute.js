const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/login', async (req, res) => {
  const id = req.session.userId;
  if (id) {
    const user = await User.findOne({ where: { id } });
    res.json({ message: 'Hi', user: user.login, points: user.points });
  } else {
    res.json({ message: 'no', user: '' });
  }
});

router.post('/registration', async (req, res) => {
  const {
    checkPassword, name, password, email, surname, phone,
  } = req.body;

  if (password && email && name && checkPassword && surname && phone) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: 'Пользователь с таким именем уже существует' });
    } else if (password === checkPassword) {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        password: hash, email, name, phone, surname, admin: false,
      });
      req.session.userId = newUser.id;
      res.status(200).json({ message: 'все ок', user: newUser.email });
    }
  }
});

router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  console.log(req.body);
  if (password && email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        req.session.userId = user.id;
        // console.log(req.session.userId);
        res.json({ message: 'успех', user: user.email });
      }
    } else {
      res.json({ message: 'Ваш login или password указаны не верно' });
    }
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

module.exports = router;
