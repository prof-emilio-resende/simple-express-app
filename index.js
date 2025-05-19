const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Hello endpoint
app.get('/hello', (req, res) => {
  res.json({ data: { message: 'Hello World' } });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
