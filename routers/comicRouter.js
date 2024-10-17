const express = require("express");
const router = express.Router();
const Comic = require("../models/comic");

// Create a comic book
router.post('/', async (req, res) => {
    try {
        const newComic = new Comic(req.body);
        await newComic.save();
        // console.log("Data saved", newComic);
        res.status(201).send(newComic);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all comic books (with pagination, filtering, and sorting)
router.get('/comics', async (req, res) => {
    const { page = 1, limit = 10, sortBy = 'book_name', order = 'asc', ...filters } = req.query;

    try {
        const comics = await Comic.find(filters)
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const totalComics = await Comic.countDocuments(filters);

        res.json({
            comics,
            totalComics,
            totalPages: Math.ceil(totalComics / limit),
            currentPage: parseInt(page)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific comic book by ID
router.get('/comicsSepcific/:id', async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id);
        if (!comic) return res.status(404).json({ message: 'Comic not found' });
        res.json(comic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a comic book by ID (only specific fields)
router.put('/comicsUpdate/:id', async (req, res) => {
    try {
      const { title, year, price} = req.body;
  
      // Create an update object with only the fields that are provided
      const updates = {};
      if (title) updates.title = title;
      if (year) updates.year = year;
      if (price) updates.price = price;
  
      // Perform the update only on the fields that exist in the updates object
      const updatedComic = await Comic.findByIdAndUpdate(req.params.id, updates, { new: true });
  
      if (!updatedComic) return res.status(404).json({ message: 'Comic not found' });
  
      res.json(updatedComic);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// Delete a comic book by ID
router.delete('/comicsDel/:id', async (req, res) => {
    try {
        const comic = await Comic.findByIdAndDelete(req.params.id);
        if (!comic) return res.status(404).json({ message: 'Comic not found' });
        res.json({ message: 'Comic deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;