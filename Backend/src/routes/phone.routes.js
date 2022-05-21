const express = require("express");
const fs = require("fs");

// Get database
const data = fs.readFileSync("./data/phones.json");
const phones = JSON.parse(data);

// Cretaes the express router
const router = express.Router();

router.get("/", (req, res) => {
  try {
    // Get the phones
    res.status(200).json(phones);
  } catch (error) {
    // Returns internal server error
    res.status(500).send({ error: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
  try {
    // Get the phone
    const phone = phones.find(phone => phone.id === parseInt(id));
    if (!phone) {
      // Returns not found error
      res.status(404).send({ error: "Phone not found" });
    } else {
      // Returns the phone
      res.status(200).json(phone);
    }
  } catch (error) {
    // Returns internal server error
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
