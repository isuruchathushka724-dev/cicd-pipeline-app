const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'CI/CD Pipeline App is running! 🚀',
    version: '1.0.0',
    status: 'healthy'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;