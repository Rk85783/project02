const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    success: true,
    message: "API works!"
  });
});

router.get("**", (req, res) => {
  res.send({
    success: false,
    message: "API not found"
  });
});

module.exports = router;
