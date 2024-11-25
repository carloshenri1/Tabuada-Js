const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")

function resultadoCalculo(){
resultado.innerHTML = ""
var numeroConvertido = Number(numero.value)
var inicial = 1
while( inicial <=10){

    resultado.innerHTML += `<p> ${numeroConvertido} x 
    ${inicial} = ${numeroConvertido * inicial}</p>`
   
    inicial++
}

}
btnTabuada.addEventListener("click", resultadoCalculo)



/* for (var inicial = 0; inicial < 10; inicial++){

    alert(inicial)
} */

/* var inicial = 0
while( inicial <= 10){
    alert(inicial)

    inicial++
} */

/* inicial = 0
do {
    alert(inicial)
    inicial++
} while (inicial <= 10); */