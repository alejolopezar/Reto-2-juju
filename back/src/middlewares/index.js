const { jwtSecret } = require("../config/conJwt");
const jwt = require("jsonwebtoken");

const validateBookData = (req, res, next) => {
    const {title, year, author, state} = req.body
    if(!title || !year || !author || !state){
        res.status(400).json({
            message: "Falta informacion para poder crear el libro",
        })
    } else {
        next();
    }
}

const logSoliInfo = (req, res, next) => {

    console.log(req.method, req.path)
    next()
}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extrae solo el token después de "Bearer"
    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.userId = decoded.userId; // Guardamos el ID de usuario en `req.userId` para uso posterior
        next();
    });
};

module.exports = {
    validateBookData,
    logSoliInfo,
    authenticateToken
};

