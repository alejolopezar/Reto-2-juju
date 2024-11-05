const { update } = require("./updateBook");
const { create } = require("./createBook");
const { search } = require("./searchBook");
const { eliminate } = require("./deleteBook");
const { login } = require("./login");
const { bookContainer } = require("./renderBooks");


const createBookForm = document.getElementById ("createBookForm");
const updateBookForm = document.getElementById ("updateBookForm");
const deleteBookForm = document.getElementById ("deleteBookForm");
const loginForm = document.getElementById ("loginForm");
    

if(bookContainer){
    search();
}

if(loginForm){
    login();
}

if (createBookForm){
    create();
}

if (updateBookForm){
    update();
}

if (deleteBookForm){
    eliminate();
}