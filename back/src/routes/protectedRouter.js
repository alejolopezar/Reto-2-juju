const { Router } = require("express");
const booksController = require("../controllers/booksController");
const { validateBookData } = require("../middlewares/index");
const { authenticateToken } = require("../middlewares/index");

const protectedRouter = Router();


protectedRouter.post("/", authenticateToken, validateBookData, booksController.postBook);

protectedRouter.put("/", authenticateToken, validateBookData, booksController.putBook);

protectedRouter.delete("/", authenticateToken, booksController.deleteBook);

module.exports = protectedRouter;