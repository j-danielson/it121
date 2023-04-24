var degCent = 10;

var degFahren = 9 / 5 * degCent + 32;

var result = degCent + "\u00B0 celsius is " + degFahren + "\u00B0 in Fahrenheit!"

document.getElementById("message").innerHTML = result;