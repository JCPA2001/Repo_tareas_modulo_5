
Servidor Express para Manejo de Estudiantes

Este servidor utiliza Express para manejar solicitudes relacionadas con un conjunto de datos de estudiantes almacenados en un archivo JSON (students.json). Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los datos de los estudiantes.

Dependencias
express: Framework web para Node.js.
fs: Módulo nativo de Node.js para manejar operaciones de sistema de archivos.
Funciones
readData
Lee los datos del archivo students.json.


const readData = () => {
    try {
        const data = fs.readFileSync("./students.json"); 
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}
writeData
Escribe datos en el archivo students.json.


const writeData = (data) => {
    try {
        fs.writeFileSync("./students.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}
Rutas
GET /
Muestra un mensaje de bienvenida.


app.get("/", (req, res) => {
    res.send("Bienvenido al servidor 3002 si");
});
GET /students
Devuelve una lista de todos los estudiantes.


app.get("/students", (req, res) => {
    const data = readData();
    res.json(data);
});
GET /students/:id
Devuelve un estudiante específico basado en su ID.


app.get("/students/:id", (req, res) => {
    const data = readData();

    if (!Array.isArray(data)) {
        res.status(500).send("Data not available");
        return;
    }

    const id = parseInt(req.params.id);
    const student = data.find((student) => student.id === id);

    if (!student) {
        res.status(404).send("Estudiante no encontrado");
        return;
    }
    
    res.json(student);
});
DELETE /students/:id
Elimina un estudiante específico basado en su ID.


app.delete("/students/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const indexStudent = data.findIndex((student) => student.id === id);

    if (indexStudent === -1) {
        res.status(404).send("Estudiante no encontrado");
        return;
    }

    data.splice(indexStudent, 1); // Eliminar el estudiante del arreglo
    writeData(data);
    res.send("El estudiante ha sido eliminado"); // Responder que el estudiante ha sido eliminado
});
Iniciar el Servidor
El servidor escucha en el puerto 3002.


app.listen(3002, () => {
    console.log("Estoy en el puerto 3002");
});
Cómo Ejecutar
Clona el repositorio.

Asegúrate de tener Node.js instalado.

Ejecuta npm install para instalar las dependencias.

Ejecuta el servidor con el comando:


node index.js
Accede al servidor en http://localhost:3002.
