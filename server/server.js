const express = require('express');
const cors = require('cors');
const path = require('path');

const productRoutes = require('./routes/products.router');
const heroRoute = require('./routes/hero.router');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/hero', heroRoute);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});