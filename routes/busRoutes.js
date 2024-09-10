// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus'); // Ensure this path is correct

// Route to get all bus data
router.get('/buses', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update bus data
router.put('/buses/:id', async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Route to reset bus locations
// router.post('/reset-buses', async (req, res) => {
//   try {
//     // Update originalLat and originalLng fields
//     await Bus.updateMany({}, { $set: { lat: '$originalLat', lng: '$originalLng' } });
//     res.status(200).json({ message: 'Buses reset to original locations' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;
