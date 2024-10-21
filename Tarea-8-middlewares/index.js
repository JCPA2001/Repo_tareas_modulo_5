import express from "express";
import fs from "fs";
import authMiddleware from "./middlewares/authMiddleware.js";
import validationMiddleware from "./middlewares/validationMiddleware.js";

const app = express();
app.use(express.json()); // Permite trabajar con JSON en las solicitudes

// Funciones para leer y escribir datos en el archivo JSON
const readData = () => {
    try {
        const data = fs.readFileSync("./students.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./students.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

// Ruta principal
app.get("/", (req, res) => {
    res.send("Bienvenido al servidor 3002 si");
});

// Obtener todos los estudiantes
app.get("/students", (req, res) => {
    const data = readData();
    res.json(data);
});

// Obtener un estudiante por ID
app.get("/students/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const student = data.find((student) => student.id === id);

    if (!student) {
        return res.status(404).send("Estudiante no encontrado");
    }

    res.json(student);
});

// Crear un nuevo estudiante (con autorización y validación)
app.post("/students", authMiddleware, validationMiddleware, (req, res) => {
    const data = readData();
    const newStudent = {
        id: data.length + 1,
        ...req.body
    };

    data.push(newStudent);
    writeData(data);
    res.status(201).json(newStudent);
});

// Actualizar un estudiante (con autorización y validación)
app.put("/students/:id", authMiddleware, validationMiddleware, (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const studentIndex = data.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).send("Estudiante no encontrado");
    }

    data[studentIndex] = { id, ...req.body };
    writeData(data);
    res.json(data[studentIndex]);
});

// Eliminar un estudiante (con autorización)
app.delete("/students/:id", authMiddleware, (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const indexStudent = data.findIndex((student) => student.id === id);

    if (indexStudent === -1) {
        return res.status(404).send("Estudiante no encontrado");
    }

    data.splice(indexStudent, 1);
    writeData(data);
    res.send("El estudiante ha sido eliminado");
});

// Iniciar el servidor
app.listen(3002, () => {
    console.log("Estoy en el puerto 3002");
});
