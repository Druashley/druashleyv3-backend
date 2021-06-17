const router = require("express").Router();

const auth = require("../middleware/auth");

const Journal = require("../models/journalModel");

router.post("/", async (req, res) => {
  try {
    let { journalTitle, journalBody } = req.body;

    if (!journalTitle || !journalBody) {
      return res
        .status(400)
        .json({ msg: "Not all field have been filled out." });
    }

    if (journalTitle.length < 1 || journalBody.length < 1) {
      return res
        .status(400)
        .json({ msg: "Both fields must have at least one character" });
    }

    const newJournal = new Journal({
      journalTitle,
      journalBody,
    });
    const savedJournal = await newJournal.save();
    res.json(savedJournal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const journalPosts = await Journal.find();
  res.json({
    journalPosts,
  });
});

module.exports = router;
