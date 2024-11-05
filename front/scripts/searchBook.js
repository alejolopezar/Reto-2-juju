const axios = require("axios");
const { createBook } = require("./renderBooks");
const { bookContainer } = require("./renderBooks");

const search = () => {

    const resetForm = () => {
        const titleSearchForm = document.querySelector("#titleSearchForm");
        titleSearchForm.reset();
        console.log("formulario limpio");

        const authorSearchForm = document.querySelector("#authorSearchForm");
        authorSearchForm.reset();
        console.log("formulario limpio");

        const yearSearchForm = document.querySelector("#yearSearchForm");
        yearSearchForm.reset();
        console.log("formulario limpio");
    };

    const titleSearch = (evento) => {
        evento.preventDefault();
        
        
        const title = document.querySelector("#titleInput").value.trim();

        axios.get("http://localhost:3000/books", {params: { title: title}
        })
        .then((res) => {

          bookContainer.innerHTML = "";
           const booksArray = res.data.map(createBook);
           console.log("formulario enviado");
           console.log(res.data);

            booksArray.forEach(book => bookContainer.appendChild(book));
            console.log("se ejecutor then");
      })
      .catch(() => {
          alert("No se encontro el libro");
           console.log("se ejecuto catch");
      })
    };

    const authorSearch = (evento) => {
        evento.preventDefault();
        console.log("formulario enviado");
        
        const author = document.querySelector("#authorInput").value.trim();

        axios.get("http://localhost:3000/books", {params: { author: author}
        })
        .then((res) => {

          bookContainer.innerHTML = ""; 
          const booksArray = res.data.map(createBook);
          

            booksArray.forEach(book => bookContainer.appendChild(book));
            console.log("se ejecutor then");
      })
      .catch(() => {
          alert("No se encontro el libro");
           console.log("se ejecuto catch");
      })
    };

    const yearSearch = (evento) => {
        evento.preventDefault();
        
        
        
        const year = Number(document.querySelector("#yearInput").value.trim());
        console.log(year);
        axios.get("http://localhost:3000/books", {params: { year: year}
        })
        .then((res) => {
         
          bookContainer.innerHTML = "";
          const booksArray = res.data.map(createBook);
          
           
            booksArray.forEach(book => bookContainer.appendChild(book));
            console.log("se ejecutor then");
      })
      .catch(() => {
          alert("No se encontro el libro");
           console.log("se ejecuto catch");
      })
    };

    const titleSearchButton = document.querySelector("#titleSearchButton");
    titleSearchButton.addEventListener("click", titleSearch);

    const authorSearchButton = document.querySelector("#authorSearchButton");
    authorSearchButton.addEventListener("click", authorSearch);

    const yearSearchButton = document.querySelector("#yearSearchButton");
    yearSearchButton.addEventListener("click", yearSearch);


    const titleResetButton = document.querySelector("#titleResetButton");
    titleResetButton.addEventListener("click", resetForm);

    const authorResetButton = document.querySelector("#authorResetButton");
    authorResetButton.addEventListener("click", resetForm);

    const yearResetButton = document.querySelector("#yearResetButton");
    yearResetButton.addEventListener("click", resetForm);

}

module.exports = {
    search
};