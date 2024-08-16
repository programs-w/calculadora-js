//eventos
document.querySelector("#boton1").addEventListener("click",visualizar)
document.querySelector("#boton2").addEventListener("click",visualizar)
document.querySelector("#boton3").addEventListener("click",visualizar)
document.querySelector("#boton4").addEventListener("click",visualizar)
document.querySelector("#boton5").addEventListener("click",visualizar)
document.querySelector("#boton6").addEventListener("click",visualizar)
document.querySelector("#boton7").addEventListener("click",visualizar)
document.querySelector("#boton8").addEventListener("click",visualizar)
document.querySelector("#boton9").addEventListener("click",visualizar)
document.querySelector("#boton0").addEventListener("click",visualizar)
document.querySelector(".botonBorrar").addEventListener("click",borrar)
document.querySelector("#botonIgual").addEventListener("click",calcular)
document.querySelector("#botonMenos").addEventListener("click",visualizar)
document.querySelector("#botonMas").addEventListener("click",visualizar)
document.querySelector("#botonDividir").addEventListener("click",visualizar)
document.querySelector("#botonPor").addEventListener("click",visualizar)
document.querySelector("#botonComa").addEventListener("click",visualizar)

function visualizar(event) {
    let numero = event.target.value;
    document.querySelector("#pantalla").value += numero;
}
//Vaciar pantalla
function borrar(){
    document.querySelector("#pantalla").value="";
}
//Toma valor de la pantalla y ejecuta calculos
function calcular (){
    let valorPantalla=document.querySelector("#pantalla").value
    let resultado=eval(valorPantalla)
    document.querySelector("#pantalla").value=resultado;
}