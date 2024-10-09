const esperarSegundos=(segundos)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {console.log("Exito"), resolve()}, segundos*1000);
    })
}

export default esperarSegundos;


