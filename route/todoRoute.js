const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");
router.post(
  "/createtodo",
  todoController.createtodo
);

router.get("/gettodo", todoController.gettoDo);
// router.patch("/products/:productId", todoController.editProduct);
// router.delete("/products/:productId", todoController.deleteProduct);
module.exports = router;
