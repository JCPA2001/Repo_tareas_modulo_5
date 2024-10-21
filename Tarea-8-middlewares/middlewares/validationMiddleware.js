// ./middlewares/validationMiddleware.js
//Middleware de Validación
const validationMiddleware = (req, res, next) => {
    const { name, age, major } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send("Invalid name. Name must be a non-empty string.");
    }

    if (typeof age !== 'number' || age < 0) {
        return res.status(400).send("Invalid age. Age must be a non-negative number.");
    }

    if (typeof major !== 'string' || major.trim() === '') {
        return res.status(400).send("Invalid major. Major must be a non-empty string.");
    }

    next(); // Permite continuar con la siguiente función del middleware si la validación es correcta
};

export default validationMiddleware;
