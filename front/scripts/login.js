const axios = require("axios");

const login = () => {

    const resetForm = () => {
        const loginForm = document.querySelector("#loginForm");
        loginForm.reset();
        console.log("formulario limpio");
    };

    const authentication = (evento) => {
        evento.preventDefault();
    

        const user = {
            username :document.querySelector("#userInput").value.trim(),
            password : document.querySelector("#passwordInput").value.trim()
        };
        
        axios.post("http://localhost:3000/login", user )
        .then((res) => {

            alert("Se ejecutó la autenticacion");

            // Acceder al token en la respuesta
        const token = res.data.token;

        // Almacenar el token en LocalStorage
        localStorage.setItem("token", token);
        console.log("Token guardado en localStorage:", token);
            })

        .catch(() => {
            alert("No se ejecutó la autentificación");
        })
    
    };

    const loginButton = document.querySelector("#loginButton");
    loginButton.addEventListener("click", authentication);

     const resetButton = document.querySelector("#resetButton");
     resetButton.addEventListener("click", resetForm);

}

module.exports = {
    login
};