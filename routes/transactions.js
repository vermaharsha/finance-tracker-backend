// routes/transactions.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.json({ message: 'Transactions route works!' });
});

module.exports = router;