function Mostrar(){
    document.getElementById("infoformacion").style.display= "block";
}
function Ocultar(){
    document.getElementById("infoformacion").style.display= "none";
}
function Mostrar_Ocultar(){
    var infoformacion = document.getElementById("infoformacion");
    if(infoformacion.style.display == "none"){
        Mostrar();  
        document.getElementById("boton1").value = "Ocultar Información"      
    }
    else{
        Ocultar();
        document.getElementById("boton1").value = "Mostrar Información" 
    }        
}
function Mostrar1(){
    document.getElementById("cursos").style.display= "block";
}
function Ocultar1(){
    document.getElementById("cursos").style.display= "none";
}    
function Mostrar_Ocultar1(){
    var cursos = document.getElementById("cursos");
    if(cursos.style.display == "none"){
        Mostrar1();  
        document.getElementById("boton2").value = "Ocultar Información"      
    }
    else{
        Ocultar1();
        document.getElementById("boton2").value = "Mostrar Información" 
    }
}    
function Mostrar3(){
    document.getElementById("trabajos").style.display= "block";
}
function Ocultar3(){
    document.getElementById("trabajos").style.display= "none";
}    
function Mostrar_Ocultar3(){
    var trabajos = document.getElementById("trabajos");
    if(trabajos.style.display == "none"){
        Mostrar3();  
        document.getElementById("boton3").value = "Ocultar Información"      
    }
    else{
        Ocultar3();
        document.getElementById("boton3").value = "Mostrar Información" 
    }
} 