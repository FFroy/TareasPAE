const express = require('express');
const app = express();
const axios = require('axios');

const API_KEY = '1e4657cdf5694240a286ebdf4a06bc25';

app.use(express.static('public'));

app.get('/noticias', async (req, res) => {
  const {q} = req.query;
  const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`;
  const response = await axios.get(url);
  res.json(response.data);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
