addEventListener("message", mensaje_recibido, false)
function mensaje_recibido(e){
    const respuesta="El texto escrito es: " + e.data;
    postMessage(respuesta);
}