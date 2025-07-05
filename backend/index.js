const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const headlines = require('./data/headlines');

app.use(cors());
app.use(express.json());

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 400 + 10);
  const headline = `Why ${name} is ${location}'s Sweetest Spot in 2025`;

  res.json({ rating, reviews, headline });
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: headline.replace('{name}', name).replace('{location}', location) });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));