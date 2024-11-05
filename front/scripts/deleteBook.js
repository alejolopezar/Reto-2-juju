const axios = require("axios");

const eliminate = () => {

    const resetForm = () => {
        const deleteBookForm = document.querySelector("#deleteBookForm");
        deleteBookForm.reset();
        console.log("formulario limpio");
    };

    const deleteBook = (evento) => {
        evento.preventDefault();
    
        const title = document.querySelector("#titleInput").value.trim();
        
        const token = localStorage.getItem("token");

        axios.delete("http://localhost:3000/protected", {data: { title: title},
            headers: {
                "Authorization": `Bearer ${token}` // Incluye el token en el encabezado de autorización
            }
        })
        .then((res) => {
            alert("Se eliminó el libro con exito");
        })
        .catch(() => {
            alert("No se pudo eliminar, RECUERDA QUE DEBES HACER EL LOGIN PARA ELIMINAR UN LIBRO.");
        })
    
    };

    const eliminateButton = document.querySelector("#eliminateButton");
    eliminateButton.addEventListener("click", deleteBook);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetForm);

}

module.exports = {
    eliminate
};