// Aquí vamos a definir las rutas a través de las cuales se comunica el servidor

const { Router } = require("express");
const booksRouter = require("./booksRouter");
const loginRouter = require("./loginRouter");
const protectedRouter = require("./protectedRouter");

const router = Router();

router.use("/books", booksRouter);

router.use("/login", loginRouter);

router.use("/protected", protectedRouter);

module.exports = router;