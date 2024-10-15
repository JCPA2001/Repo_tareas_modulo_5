import fs from 'fs';

let numeros = Array.from({ length: 1000 }, (_, i) => i + 1).join('\n');
// console.log(numeros)


try {
    fs.writeFileSync("numeros.txt", numeros);
    console.log('¡Archivo numeros.txt creado exitosamente!');
} catch (error) {
    console.log('Error:', error);
}
