function calculadora (){
    const primerNumero = document.getElementById("primerNumero");
    const segundoNumero = document.getElementById("segundoNumero");
    const num_1 = Number(primerNumero.value);
    const num_2 = Number(segundoNumero.value);
    const result = document.querySelector("#result");
    const suma = document.getElementById("btnSuma");
    const resta = document.getElementById("btnResta");
    const multiplicacion = document.getElementById("btnMultiplicacion");
    const divicion = document.getElementById("btnDivicion");
    const igual = document.getElementById("btnIgual");

    suma.addEventListener("click",function(){
        igual.addEventListener("click",function(){
            result.innerHTML = num_1 + num_2
        })
    });

    resta.addEventListener("click",function(){
        igual.addEventListener("click",function(){
            result.innerHTML = num_1 - num_2
        })
    });

    multiplicacion.addEventListener("click",function(){
        igual.addEventListener("click",function(){
            result.innerHTML = num_1 * num_2
        })
    });

    divicion.addEventListener("click",function(){
        igual.addEventListener("click",function(){
            result.innerHTML = num_1 / num_2
        })
    });
}

window.addEventListener("load",calculadora)