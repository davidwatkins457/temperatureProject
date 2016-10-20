function calculate(degrees){
    var temperature;
    if(degrees  == "f"){
    temperature = document.getElementById("fahrenheit").value * (9/5) + 32;
            document.getElementById("celsius").value = Math.round(temperature)}
        else {
            temperature =  (document.getElementById("celsius").value -32) * (5/9);
        document.getElementById("fahrenheit").value = Math.round(temperature);
        }
}