// ./middlewares/authMiddleware.js
//AtorizaCIÓN
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // !authHeader: Verifica si el encabezado Authorization (authHeader) es falso, es decir, si no existe o es vacío.
    //authHeader !== 'Bearer mysecrettoken': Verifica si el valor del encabezado Authorization no coincide con el token esperado ('Bearer mysecrettoken').
    if (!authHeader || authHeader !== 'Bearer mysecrettoken') {
        return res.status(403).send("Forbidden: Invalid or missing token");
    }

    next(); // Permite continuar con la siguiente función del middleware si el token es correcto
};

export default authMiddleware;
