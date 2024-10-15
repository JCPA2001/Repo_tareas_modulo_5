import esperarSegundos from "./async.js";

const ejecutarPruebas = async () => {
    console.log('Iniciando pruebas de espera...');

    await esperarSegundos(2);  // Espera 2 segundos
    await esperarSegundos(5);  // Espera 5 segundos
    await esperarSegundos(3);  // Espera 3 segundos

    console.log('Todas las pruebas de espera han terminado.');
};

// Llama a la función para ejecutar las pruebas
ejecutarPruebas();