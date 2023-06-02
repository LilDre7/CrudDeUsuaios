const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");

// == Estas son las rutas son 👉🏾 / 👈🏾  //
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// == Estas son las rutas son 👉🏾 /:id 👈🏾  //
router
  .route("/:id")
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
