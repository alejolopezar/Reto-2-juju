const { jwtSecret, users } = require("../config/conJwt");
const jwt = require("jsonwebtoken");

module.exports = {
    getToken: async (req, res) => {
        const { username, password } = req.body;

    // Verificamos si el usuario existe y la contraseña es correcta
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Crear token JWT
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '10m' });
    res.json({ token });

    },
};