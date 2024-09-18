const express = require("express");
const handlers = require("./../appControllers/toursController");

// Router
const router = express.Router();


// Routes
router
  .route("/")
  .get(handlers.getAllTours)
  .post(handlers.createTour);
  
router
  .route("/:id")
  .get(handlers.getTour)
  .patch(handlers.updateTour)
  .delete(handlers.deleteTour);
  
  module.exports = router;