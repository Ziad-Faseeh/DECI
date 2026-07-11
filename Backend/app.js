const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'user@example.com' && password === 'password123') {
    return res.status(200).json({ token: 'fake-jwt-token' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ]);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => console.log('Server running on port 5000'));
}

module.exports = app;