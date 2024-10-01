let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
 ];
 
//  Utilizando filterdebes filtrar los productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
 const ropa = productos.filter(producto => producto.categoria === 'Ropa');
 console.log(ropa);

//  Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
 const preciosMayores = productos.filter(producto => producto.precio > 30);
console.log(preciosMayores);
