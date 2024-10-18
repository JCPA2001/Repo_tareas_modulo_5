import express from "express";
import fs from "fs"

const app = express()

// conexión base de datos
// readData funcion para leer los datos
const readData = () => {

    try{
    const data = fs.readFileSync("./students.json")
    return JSON.parse(data)
    }catch (error){
        console.log(error)
    };
    
}
// writeData para escribir
const writeData = (data) =>{
    try{
        fs.writeFileSync("./students.json",JSON.stringify(data))
    }catch (error){
        console.log(error)
    };
}



app.get("/",(req,res)=>{
    res.send("Bienvenido al servidor 3002 si")
})


// función para obtener todos los libros
app.get("/students", (req,res)=>{
    const data = readData()
    res.json(data)
})

// obtener un solo libro por id
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

// Delete
app.delete("/students/:id",(req, res)=>{
    const data = readData();
    const id = parseInt(req.params.id);// Obtener el ID de los parámetros de la URL
    const indexStudent = data.findIndex((student) => student.id === id);

    data.splice(indexStudent, 1); // Eliminar el estudiante del arreglo
    writeData(data)
    res.send("El estudiante ha sido eliminado"); // Responder que el estudiante ha sido eliminado
} )
    



app.listen(3002,()=>{
    console.log("Estoy en eñ puerto 3002")
})