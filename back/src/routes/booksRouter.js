const { Router } = require("express");
const booksController = require("../controllers/booksController");


const booksRouter = Router();

booksRouter.get("/", booksController.getBook);


module.exports = booksRouter;