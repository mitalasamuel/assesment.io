let x = myFunction(4, 3);
let y = myFunction(20,65)
function myFunction() {
    var a;
    var b;
  return a * b;
}
document.getElementById("Product").innerHTML=x
document.getElementById("Product2").innerHTML=y





function toCelsius(fahrenheit) {
    return 5/9 * (fahrenheit-32);
  }
  
  document.getElementById("Celcius").innerHTML = toCelsius(77);