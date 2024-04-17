const express = require('express');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Define routes
app.get('/api/data', async (req, res) => {
  try {
    const data = await db.getData(); // Implement this function
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
