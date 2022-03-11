function calcular(){
    let numero = document.querySelector("input").value;
    let celcius = document.querySelector("#c").checked;
    let fahrenheit = document.querySelector("#f").checked;
    let kelvin = document.querySelector("#k").checked;
    let rankine = document.querySelector("#r").checked;
    
    if(celcius){
        alert(numero + "ºC = " + (numero*(9/5) + 32) + "ºF\n" + 
        numero + "ºC = " + (parseInt(numero)+273.15) + "ºK\n" +
        numero + "ºC = " + (parseInt(numero)+273.15)*(9/5) + "ºR\n" 
        );
    }

    if(fahrenheit){
        alert(numero + "ºF = " + (numero-32)*(5/9) + "ºC\n" +
        numero + "ºF = " + ((numero-32)*(5/9)+273.15) + "ºK\n" +
        numero + "ºF = " + (parseInt(numero)+459.67) + "ºR\n"
        );
    }

    if(kelvin){
        alert(numero + "ºK = " + (numero-273.15) + "ºC\n" + 
        numero + "ºK = " + ((numero-273.15)*(9/5)+32) + "ºF\n" +
        numero + "ºK = " + (numero*(9/5)) + "ºR"
        );
    }

    if(rankine){
        alert(numero + "ºR = " + (numero-491.67)*(5/9) + "ºC\n" +
        numero + "ºR = " + (numero-459.67) + "ºF\n" +
        numero + "ºR = " + (numero*(5/9)) + "ºK"
        );
    }

}