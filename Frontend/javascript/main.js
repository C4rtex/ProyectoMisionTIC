const inputs = document.querySelectorAll('.inp-form');
inputs.forEach(input => {
    input.onfocus = () => {
        input.previousElementSibling.classList.add('reubicar');
        input.parentNode.classList.add('focus');
    }

    input.onblur = () => {
        if (input.value.trim().length == 0)
            input.previousElementSibling.classList.remove('reubicar');
        input.parentNode.classList.remove('focus');
    }
});
navCrearRutina= document.getElementById("navCrearRutina");
navVerRutina=document.getElementById("navVerRutina");
Xcerrar=document.getElementById("Xcerrar");
btnagrrutina=document.getElementById("btnagrrutina");
let formEjercicios=document.getElementById("formEjercicios");


formEjercicios.addEventListener("submit",function(event){
    event.preventDefault();
    let formEjerciciosDatos=new FormData(formEjercicios)
    let tablaEjerciciosRef=document.getElementById("tablaEjercicios");
    let nuevaFilaEjercRef =tablaEjerciciosRef.insertRow(1);
    let nuevaCeldaEjercRef = nuevaFilaEjercRef.insertCell(0);
    nuevaCeldaEjercRef.textContent =formEjerciciosDatos.get("inpEjercicios");
    let nuevaCeldaTempRef = nuevaFilaEjercRef.insertCell(1);
    nuevaCeldaTempRef.textContent =formEjerciciosDatos.get("inpTiempo");
    let tiempito=document.getElementById("totaltiempo");
    tiempito.textContent=parseInt(document.getElementById("totaltiempo").innerHTML)+ parseInt(document.getElementById("tiempo").value);
})
navVerRutina.onclick=verVerRut;
navCrearRutina.onclick=verCrearRut;
Xcerrar.onclick=cerrarModal;
btnagrrutina.onclick=abrirModal;
primeraCarga();

function abrirModal(){
    modalCrearRutina=document.getElementById("modalCrearRutina");
    modalCrearRutina.classList.add("modalCrearRutina");
    modalCrearRutina.classList.remove("no_mostrar");
    seccionmostrar=document.getElementById("seccionmostrar");
    seccionmostrar.classList.add("no_mostrar");
    
}
function cerrarModal(){
    modalCrearRutina=document.getElementById("modalCrearRutina");
    modalCrearRutina.classList.remove("modalCrearRutina");
    modalCrearRutina.classList.add("no_mostrar");
    seccionmostrar=document.getElementById("seccionmostrar");
    seccionmostrar.classList.remove("no_mostrar");
}
function verCrearRut(){
    divrutinas=document.getElementsByClassName("divrutinas")[0];
    misRutinas=document.getElementById("nuevaRutina");
    divrutinas.classList.add("no_mostrar");
    misRutinas.classList.add("txtblanco");
    navCrearRutina.classList.add("activanuevarut");
    divnuevarutina.classList.remove("no_mostrar");
    navVerRutina.classList.remove("actiarutinas");
}

function verVerRut(){
    divnuevarutina=document.getElementsByClassName("divnuevarutina")[0];
    divnuevarutina.classList.add("no_mostrar");
    navVerRutina.classList.add("actiarutinas");
    divrutinas.classList.remove("no_mostrar");
    misRutinas.classList.remove("txtblanco");
    navCrearRutina.classList.remove("activanuevarut");
}

function primeraCarga(){
    divrutinas=document.getElementsByClassName("divrutinas")[0];
    misRutinas=document.getElementById("nuevaRutina");
    divnuevarutina=document.getElementsByClassName("divnuevarutina")[0];
  divrutinas.classList.add("no_mostrar");
    misRutinas.classList.add("txtblanco");
    navCrearRutina.classList.add("activanuevarut");
    divnuevarutina.classList.remove("no_mostrar");
    navVerRutina.classList.remove("actiarutinas");
    modalCrearRutina=document.getElementById("modalCrearRutina");
    modalCrearRutina.classList.remove("modalCrearRutina");
    modalCrearRutina.classList.add("no_mostrar");
    seccionmostrar=document.getElementsByClassName("seccionmostrar")[0];
    seccionmostrar.classList.remove("no_mostrar");
}
function alerta(){
    alert("siobvio")
}

//navVerRutina