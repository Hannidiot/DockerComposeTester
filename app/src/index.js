const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Simple API endpoints
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
}); 