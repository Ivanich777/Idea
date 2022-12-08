const fetch = require('node-fetch');
const router = require('express').Router();
const { Feedback } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    img,
    name,
    phone,
    email,
    description,
  } = req.body;
  console.log(req.body);
  const feedback = await Feedback.create({
    img,
    name,
    phone,
    email,
    description,
  });
  const token = '5884285195:AAFgHaATensOkml9L8qNxfrKGSNJ5779JCs';
  const chatId = '-896973790';
  const text = `Имя:${name} Телефон: ${phone} Описание: ${description} email: ${email} img: ${img}`;
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}@DanceSchool&parse_mode=HTML&text=${text}`);
  res.status(200).json({ message: 'Успех', newReq: feedback });
});

module.exports = router;
