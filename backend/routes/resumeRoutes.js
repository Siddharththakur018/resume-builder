const express = require('express');
const Resume = require('../model/resumeModel');
const upload = require('../middleware/upload');

const router = express.Router();

router.post("/resume", upload.single("photo"), async (req, res) => {
  try {
    const newResume = new Resume({
      ...req.body,
      photo: req.file ? req.file.path : null 
    });

    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;