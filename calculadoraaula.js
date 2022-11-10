function operation() {

let valor1 = parseInt(document.getElementById("valor1").value);
let valor2 = parseInt(document.getElementById("valor2").value);
let resultado = null;

let operacao = document.getElementById("operation").value;

switch (operacao) {
    case "somar":
        resultado = valor1 + valor2;
        break;   
    case "subtrair":
        resultado = valor1 - valor2;
        break;
    case "multiplicar":
            resultado = valor1 * valor2;
            break;
    case "dividir":
        resultado = valor1 / valor2;
        break;
}


    document.querySelector('#outputfinal').innerHTML = resultado;
    }



