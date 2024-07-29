const express = require('express');
const cors = require('cors');
const promisePool = require('./db'); 

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/cars', async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM cars');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
