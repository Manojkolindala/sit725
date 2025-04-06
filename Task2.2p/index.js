// Import express module
const express = require('express');
const app = express();

// Serve static files (optional, for future static assets)
app.use(express.static('public'));

// Parse URL-encoded data for POST requests
app.use(express.urlencoded({ extended: true }));

// Serve the form on the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the GET request for addition
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  const sum = a + b;
  res.json({ sum });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
