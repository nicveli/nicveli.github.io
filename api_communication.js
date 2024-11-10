function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    zonaprogreso=document.getElementById("zonaprogreso");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", leer, false);
}

function leer(){
    var url='https://github.com/nicveli/nicveli.github.io/blob/main/Padron_Ret_Per_202411.csv';
    var solicitud= new XMLHttpRequest();
    solicitud.addEventListener("loadstart",comienza_barra, false);
    solicitud.addEventListener("progress", estadobarra, false);
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send();
}

function comienza_barra(){
    zonadatos.innerHTML="<progress value='0' max='100'></progress>";
}

function estadobarra(e){
    var porcentaje=parseInt(e.loaded/e.total*100);
    var barraprogreso=zonadatos.querySelector("progress");
    barraprogreso.value = porcentaje;
    zonaprogreso.innerHTML=porcentaje + " %";
}

function mostrar(e){
    zonadatos.innerHTML="Archivo Leído!!!";
    
}

window.addEventListener("load", comenzar, false);