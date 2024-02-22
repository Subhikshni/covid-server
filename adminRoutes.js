const express = require("express");
const router = express.Router();
const { employee } = require("./model");

router.post("/submit", async (req, res) => {
  try {
    const {
      Name,
      ID,
      Department,
      DateOfBirth,
      Age,
      Gender,
      Designation,
      Salary,
    } = req.body;

    const newCenter = await employee.create({
      Name,
      ID,
      Department,
      DateOfBirth,
      Age,
      Gender,
      Designation,
      Salary,
    });

    res.status(201).json({ success: true, data: newCenter });
  } catch (error) {
    console.error("Error submitting center data:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit center data. Please try again later.",
    });
  }
});

router.get("/centers", async (req, res) => {
  try {
    const centers = await employee.findAll();
    res.json(centers);
  } catch (error) {
    console.error("Error fetching center data:", error);
    res.status(500).json({ error: "Failed to fetch center data" });
  }
});

module.exports = router;
