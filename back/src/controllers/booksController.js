const bookServices = require("../services/bookServices");

module.exports = {
    getBook: async (req, res) => {
        const  input  = req.query;
            const book = await bookServices.getBooks(input);
            if (!book || book.length === 0) {
                return res.status(404).json({ message: "El libro no esta en la base de datos" });
            }
            else {res.status(200).json(book);}
    },

    postBook: async (req, res) => {
        const { title, year, author, state } = req.body;
            const newBook = await bookServices.createBook({ title, year, author, state });
            res.status(201).json(newBook);
    },

    putBook: async (req, res) => {
            const { id, title, author, year, state } = req.body;
            const updatedBook = await bookServices.updateBook( id, title, author, year, state );
            if (updatedBook.modifiedCount === 0) {
                return res.status(404).json({ message: "No se realizaron cambios en el libro, puede que no haya habido modificaciones." });
            }
            else {res.status(201).json(updatedBook);}
            
    },

    deleteBook: async (req, res) => {
        const { title } = req.body;
            const deletedBook = await bookServices.deleteBook({ title });
            if (deletedBook.deletedCount === 0) {
                return res.status(404).json({ message: "No se encontró el libro para eliminar." });
            }
            else {res.status(201).json(deletedBook);}
    },
};
