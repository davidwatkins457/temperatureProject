"use strict";
function calculate(degrees) {
    var temp = document.getElementsByClassName("temp");
    var temperature;
    var fahrenheit = document.getElementById("f");
    var celsius = document.getElementById("c");
    if (degrees === "f") {
        temperature = (fahrenheit.value - 32) * (5 / 9);
        celsius.value = temperature.toFixed(2);

    }
    else {
        temperature = celsius.value * (9 / 5) + 32;
        fahrenheit.value = temperature.toFixed(2);

    } //Ending of a number
    // if(isNaN(temp) || ""){
    //  alert("Please enter a numeric value");
    // return false;
// Loop
    for (temp; isNaN(temp) || ""; ) {
        alert ("Please enter a numeric value");
        break;
    }

    try {

        if (fahrenheit == "") {
            fahrenheit.value = "0";

        document.getElementById("f").value = NaN;
        }
    }
    catch (err) {
        console.log(err);
    }
}// Ending of function

