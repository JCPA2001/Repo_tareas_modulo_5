import http from "http";

const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];



const server= http.createServer((req,res)=>{
    if(req.url ==='/products' && req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(products))
        console.log(req.url)

    }else if(req.url.startsWith('/products/')&& req.method === 'GET'){
        const id = parseInt(req.url.split('/')[2]);
        const product= products.find(p=> p.id === id)

        if (product) {
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(product));
        } else {
            
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Producto no encontrado' }));
        }
    } else {
       
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Ruta no encontrada' }));
    }
    
   
    
})

server.listen(3002, ()=>{
    console.log(" Puerto 3002")
})