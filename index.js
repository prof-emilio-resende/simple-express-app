const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Hello endpoint
app.get('/hello', (req, res) => {
  res.json({ data: { message: 'Hello World' } });
});

// POST /message endpoint
app.post('/message', (req, res) => {
  const { data } = req.body;
  if (!data || typeof data.message !== 'string') {
    return res.status(400).json({ error: 'Invalid request body. Expected { data: { message: string } }' });
  }
  console.log(data);
  res.status(201).json({ data: { message: data.message } });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
