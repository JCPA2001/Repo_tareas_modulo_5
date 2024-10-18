
function sumar (a,b){
    return a + b
}
function restar (a,b){
    return a - b
}
function multiplicar (a,b){
    return a * b
}
function dividir (a,b){
    if(b===0){
        return "Error: No se puede dividir por cero."
    }
    return a / b
}

function calculadora(){
    const args= process.argv.slice(2)
    console.log(args)
    const[numero1, operacion, numero2]= args
    
    const a = parseFloat(numero1)
    const b = parseFloat(numero2)

    if (isNaN(a) || isNaN(b)) {
        console.log("Error: Por favor ingresa números válidos.");
        return;
    }
    

    let resultado;
    switch (operacion) {
        case '+':
            resultado = sumar(a, b);
            break;
        case '-':
            resultado = restar(a, b);
            break;
        case '*':
            resultado = multiplicar(a, b);
            break;
        case '/':
            resultado = dividir(a, b);
            break;
        default:
            console.log("Error: Operación no válida. Usa +, -, * o /.");
            return;
    }
    console.log("Resultado", resultado)
}

calculadora()