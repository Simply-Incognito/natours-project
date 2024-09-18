const express = require('express');
const handlers = require('./../appControllers/usersController');

const router = express.Router();

router
  .route("/")
  .get(handlers.getAllUsers)
  .post(handlers.createUser);
  
router
  .route("/:id")
  .get(handlers.getUser)
  .patch(handlers.updateUser)
  .delete(handlers.deleteUser);
  
  module.exports = router;