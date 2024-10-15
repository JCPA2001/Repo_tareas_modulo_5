import fs from 'fs';

// Leer el contenido del archivo numeros.txt
try {
    const data = fs.readFileSync('numeros.txt', 'utf-8');
    const numeros = data.split('\n'); // Separar el contenido por líneas

    // Filtrar los números pares
    const numerosPares = numeros.filter((numberString) => {
        const numero = parseInt(numberString); // Convertir de string a número
        return numero % 2 === 0; // Verificar si es par
    });

    // Mostrar los números pares en consola
    console.log('Números pares encontrados:', numerosPares.join(', '));
} catch (error) {
    console.log('Error al leer el archivo:', error);
}
