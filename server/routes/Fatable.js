// routes/fatables.js
const express = require('express');
const router = express.Router();
const { Fatables } = require('../models'); // Ensure this matches your model export
const { validateToken } = require('../middlewares/AuthMiddleware');

// Create a new record in Fatables
router.post("/", validateToken, async (req, res) => {
    const fa = req.body;
    try {
        await Fatables.create(fa);
        res.json(fa);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the record." });
    }
});


// Delete a record from Fatables
router.delete("/:faId", validateToken, async (req, res) => {
    const faId = req.params.faId;
    try {
        // Check if the record exists
        const faRecord = await Fatables.findByPk(faId);
        if (!faRecord) {
            return res.status(404).json({ error: "Record not found" });
        }

        // Proceed to delete the record
        await Fatables.destroy({
            where: {
                id: faId,
            },
        });
        res.json({ message: "Record deleted successfully" });
    } catch (error) {
        console.error('Error occurred while deleting:', error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while deleting the record." });
    }
});


router.put("/:faId", validateToken, async (req, res) => {
    const faId = req.params.faId;
    const { faname, age, designation } = req.body; // Get the fields you want to update from the request body

    try {
        const faRecord = await Fatables.findByPk(faId);
        if (!faRecord) {
            return res.status(404).json({ error: "Record not found" });
        }

        // Update the record with new data
        faRecord.faname = faname;
        faRecord.age = age;
        faRecord.designation = designation;

        await faRecord.save(); // Save the updated record to the database

        res.json(faRecord);
    } catch (error) {
        console.error('Error occurred while updating:', error);
        res.status(500).json({ error: "An error occurred while updating the record." });
    }
});





module.exports = router;
