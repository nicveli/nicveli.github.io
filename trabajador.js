puertos= new Array();


addEventListener("connect", conectar, false);

function conectar(e){
    puertos.push(e.ports[0]);
    e.ports[0].onmessage=enviar;
}

function enviar(e){
    for(f=0;f<ports.length; f++){
        puertos[f].postMessage("El texto que has escrito es: " + e.data);
    }
}