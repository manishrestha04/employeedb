const express = require('express');
const router = express.Router();
const { Fatables } = require('../models'); // Import your Sequelize model


// Route to get all FaTable data
router.get('/', async (req, res) => {
  try {
    const faviews = await Fatables.findAll(); // Fetch all records from Fatables table
    res.json(faviews); // Send data back as JSON
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;
