require("dotenv").config();

const jwtSecret = process.env.jwtSecret;

const users = [
    { id: 1, username: 'alejandro', password: '123' },
    { id: 2, username: 'andrea', password: '456' }
];

module.exports = { jwtSecret, users};