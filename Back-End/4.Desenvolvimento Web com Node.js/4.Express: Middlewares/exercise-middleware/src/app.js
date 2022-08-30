const express = require('express');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateDesciption = require('./middleware/validateDescription');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, validateDesciption, (req, res) => {
  res.status(201).json({message: "Atividade cadastrada com sucesso"});
});

module.exports = app;