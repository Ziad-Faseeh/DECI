const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, title: 'The Trilogy', author: 'Naguib Mahfouz', price: 35, category: 'Stories' },
    { id: 2, title: 'The Blue Elephant', author: 'Ahmed Mourad', price: 20, category: 'Stories' },
    { id: 3, title: 'Utopia', author: 'Ahmed Khaled Towfik', price: 15, category: 'Stories' },
    { id: 4, title: 'Memory in the Flesh', author: 'Ahlam Mosteghanemi', price: 22, category: 'Stories' },
    { id: 5, title: 'Taxi', author: 'Khaled Al Khamissi', price: 12, category: 'Stories' },
    { id: 6, title: 'The Yacoubian Building', author: 'Alaa Al Aswany', price: 28, category: 'Stories' },
    { id: 7, title: 'I Am Yusuf and This Is My Brother', author: 'Mahmoud Darwish', price: 18, category: 'Stories' },
    { id: 8, title: 'The Bamboo Stalk', author: 'Saud Alsanousi', price: 24, category: 'Stories' },
    { id: 9, title: 'Frankenstein in Baghdad', author: 'Ahmed Saadawi', price: 21, category: 'Stories' },
    { id: 10, title: 'Granada Trilogy', author: 'Radwa Ashour', price: 30, category: 'Stories' },
    { id: 11, title: 'A Brief History of Time', author: 'Stephen Hawking', price: 25, category: 'Science' },
    { id: 12, title: 'Cosmos', author: 'Carl Sagan', price: 23, category: 'Science' },
    { id: 13, title: 'The Selfish Gene', author: 'Richard Dawkins', price: 19, category: 'Science' },
    { id: 14, title: 'Sapiens', author: 'Yuval Noah Harari', price: 27, category: 'Science' },
    { id: 15, title: 'Astrophysics for People in a Hurry', author: 'Neil deGrasse Tyson', price: 16, category: 'Science' },
    { id: 16, title: 'The Elegant Universe', author: 'Brian Greene', price: 22, category: 'Science' },
    { id: 17, title: 'Introduction to History (Muqaddimah)', author: 'Ibn Khaldun', price: 45, category: 'History' },
    { id: 18, title: 'The Genius of Omar', author: 'Abbas Mahmoud Al-Aqqad', price: 14, category: 'History' },
    { id: 19, title: 'The Crusades Through Arab Eyes', author: 'Amin Maalouf', price: 26, category: 'History' },
    { id: 20, title: 'A History of the Arab Peoples', author: 'Albert Hourani', price: 32, category: 'History' },
    { id: 21, title: 'Jerusalem: The Biography', author: 'Simon Sebag Montefiore', price: 29, category: 'History' },
    { id: 22, title: 'The Guns of August', author: 'Barbara W. Tuchman', price: 20, category: 'History' },
    { id: 23, title: 'Clean Code', author: 'Robert C. Martin', price: 42, category: 'Tech' },
    { id: 24, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', price: 40, category: 'Tech' },
    { id: 25, title: 'You Dont Know JS', author: 'Kyle Simpson', price: 25, category: 'Tech' },
    { id: 26, title: 'Design Patterns', author: 'Erich Gamma', price: 50, category: 'Tech' },
    { id: 27, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', price: 65, category: 'Tech' },
    { id: 28, title: 'Refactoring', author: 'Martin Fowler', price: 48, category: 'Tech' },
    { id: 29, title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', price: 55, category: 'Tech' },
    { id: 30, title: 'The Clean Architecture', author: 'Robert C. Martin', price: 44, category: 'Tech' }
  ]);
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'ziad@deci.com' && password === '0000') {
    return res.status(200).json({ token: 'fake-jwt-token' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => console.log('Server running on port 5000'));
}

module.exports = app;