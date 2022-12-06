const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/user', async (req, res) => {
  if (req.session?.userId) {
    const { userId } = req.session;
    // console.log(req.session.userId);
    const user = await User.findOne({ where: { id: userId } });
    res.json({
      isLoggedIn: true,
      message: 'Hi',
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        admin: user.admin,
        email: user.email,
      },
    });
  } else {
    res.json({ message: 'no', isLoggedIn: false });
  }
});

router.post('/registration', async (req, res) => {
  const {
    checkPassword, name, password, email, surname, phone,
  } = req.body;
  
  if (password && email && name && checkPassword && surname && phone) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.json({ message: 'Пользователь с таким именем уже существует' });
    } else if (password === checkPassword) {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        password: hash, email, name, phone, surname, admin: false,
      });
      req.session.userId = newUser.id;
      // console.log(req.session);
      res.status(200).json({
        message: 'все ок',
        user: {
          id: newUser.id,
          name: newUser.name,
          surname: newUser.surname,
          phone: newUser.phone,
          admin: newUser.admin,
          email: newUser.email,
        },
      });
    }
  }
});

router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  // console.log(req.body);
  if (password && email) {
    const newUser = await User.findOne({ where: { email } });
    console.log(newUser);
    if (newUser) {
      const isSame = await bcrypt.compare(password, newUser.password);
      console.log(isSame);
      if (isSame) {
        req.session.userId = newUser.id;
        // console.log(req.session.userId);
        res.json({
          message: 'успех',
          user: {
            id: newUser.id,
            name: newUser.name,
            surname: newUser.surname,
            phone: newUser.phone,
            admin: newUser.admin,
            email: newUser.email,
          },
        });
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
