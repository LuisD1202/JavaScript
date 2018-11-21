var suma = 4+8
var resta = 10-5
var multi = 5 * 15
var divi = 90 / 5

console.log("Suma: "+suma+" Resta: "+resta+" Multiplicación: "+multi+ " Diviosion: "+divi);

var modulo = 97%3
console.log("Modulo "+modulo);

var nume = 20
var incre = --nume
var decre = ++nume
var unary = -nume
console.log("Incremento: "+incre+ " Decremento: "+decre+ " Unary: "+unary);

function evaluarnum(num1,num2){
  if((num1 % 2) == 0 && (num2 % 2) == 0){
    alert("Los dos numeros son PARES")
  }
  else {
    alert("Alguno o los dos numeros no son pares")
  }
}

evaluarnum(4,15)

function areaTriangulo(){
  var a=0,b=0,area=0;
  b = prompt("Ingrese la base (b) del Triangulo")
  a = prompt("Ingrese la altura (h) del Triangulo")
  area = (b*a)/2
  alert("El area del triangulo es: "+ area);
}
areaTriangulo();


/* Ciclo Do-While*/
var listanombre = ["camilo","juan","stefan","luis","mauricio","Carlos","Margarito","Pamelo","josefa","David"]
var i = 5;
var resultado="";

do{
  resultado = resultado + listanombre[i]+"\n";
  i=i+1
}while(i<10)
alert(resultado)


while (i<10) {
  resultado = resultado + listanombre[i]+"\n";
  i++;
}
alert(resultado)
