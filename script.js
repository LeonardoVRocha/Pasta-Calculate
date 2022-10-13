const numero1 = document.querySelector(".venda");
const numero2 = document.querySelector(".notaFiscal");
const calcular = document.querySelector(".btn");
const resultado = document.querySelector(".resultado")
const tarifa = document.querySelector(".tarifa")
const frete = document.querySelector(".frete")

calcular.addEventListener("click", function(){
    let calculo = Number(numero1.value * numero2.value) / 100;
    let result = (numero1.value - calculo) - frete.value;
    resultado.innerHTML = result;
})