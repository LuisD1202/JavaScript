//Declaracion de variables.
var pantalla = document.getElementById("display");
var num0 = document.getElementById("num0");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var on = document.getElementById("On");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var tecla_divide = document.getElementById("dividido");
var tecla_multiplica = document.getElementById("por");
var tecla_resta = document.getElementById("menos");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var mas = document.getElementById("mas");
var value1 = "";
var value2 = "";
var oper = "";
// Escritura de numeros y signos
{
  num0.addEventListener("click",function()
  {
    if (pantalla.textContent == "0") {
      pantalla.textContent = "0";
    }
    else {
      validateLeng(pantalla.textContent , "0");
    }
  })
  num1.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "1";
    }
    else {
      validateLeng(pantalla.textContent , "1");
    }
  })
  num2.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "2";
    }
    else {
      validateLeng(pantalla.textContent , "2");
    }
  })
  num3.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "3";
    }
    else {
      validateLeng(pantalla.textContent , "3");
    }
  })
  num4.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "4";
    }
    else {
      validateLeng(pantalla.textContent , "4");
    }
  })
  num5.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "5";
    }
    else {
      validateLeng(pantalla.textContent , "5");
    }
  })
  num6.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "6";
    }
    else {
      validateLeng(pantalla.textContent , "6");
    }
  })
  num7.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "7";
    }
    else {
      validateLeng(pantalla.textContent , "7");
    }
  })
  num8.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "8";
    }
    else {
      validateLeng(pantalla.textContent , "8");
    }
  })
  num9.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "9";
    }
    else {
      validateLeng(pantalla.textContent , "9");
    }
  })
  on.addEventListener("click",function(){ pantalla.textContent = "0";})
  punto.addEventListener("click",function(){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "0.";
    }
    else {
      var contenido = pantalla.textContent;
      if (contenido.indexOf('.') != -1)
      {
        alert("El contenido ya tiene un punto y no se agregara : "+contenido);
      }
      else {
        validateLeng(pantalla.textContent , ".");
      }
    }
  })
  sign.addEventListener("click",function(){
    var contenido = pantalla.textContent;
    if (contenido.indexOf('-') != -1)
    {
      pantalla.textContent = contenido.substr(1);
    }
    else {
        pantalla.textContent = "-" + pantalla.textContent ;
    }
  })
}
// Operaciones
  mas.addEventListener("click",function()
  {
    value1 = pantalla.textContent;
    oper = "+";
    pantalla.textContent = "";
  })
  raiz.addEventListener("click",function(){
    value1 = pantalla.textContent;
    oper = "raiz";
    pantalla.textContent = "";})
  tecla_divide.addEventListener("click",function()  {
      value1 = pantalla.textContent;
      oper = "/";
      pantalla.textContent = "";
    })
  tecla_multiplica.addEventListener("click",function()  {
      value1 = pantalla.textContent;
      oper = "*";
      pantalla.textContent = "";
    })
  tecla_resta.addEventListener("click",function()  {
      value1 = pantalla.textContent;
      oper = "-";
      pantalla.textContent = "";
    })

  igual.addEventListener("click",function()
  {
    value2 = pantalla.textContent;
    Operation(oper, value1, value2);
  })
// Animaciones
{
  num0.addEventListener("mousedown",function(){
   num0.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num0.addEventListener("mouseout",function(){
    num0.setAttribute("style","transform:scale(1,1)")
  })
  num1.addEventListener("mousedown",function(){
   num1.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num1.addEventListener("mouseout",function(){
    num1.setAttribute("style","transform:scale(1,1)")
  })
  num2.addEventListener("mousedown",function(){
   num2.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num2.addEventListener("mouseout",function(){
    num2.setAttribute("style","transform:scale(1,1)")
  })
  num3.addEventListener("mousedown",function(){
   num3.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num3.addEventListener("mouseout",function(){
    num3.setAttribute("style","transform:scale(1,1)")
  })
  num4.addEventListener("mousedown",function(){
   num4.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num4.addEventListener("mouseout",function(){
    num4.setAttribute("style","transform:scale(1,1)")
  })
  num5.addEventListener("mousedown",function(){
   num5.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num5.addEventListener("mouseout",function(){
    num5.setAttribute("style","transform:scale(1,1)")
  })
  num6.addEventListener("mousedown",function(){
   num6.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num6.addEventListener("mouseout",function(){
    num6.setAttribute("style","transform:scale(1,1)")
  })
  num7.addEventListener("mousedown",function(){
   num7.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num7.addEventListener("mouseout",function(){
    num7.setAttribute("style","transform:scale(1,1)")
  })
  num8.addEventListener("mousedown",function(){
   num8.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num8.addEventListener("mouseout",function(){
    num8.setAttribute("style","transform:scale(1,1)")
  })
  num9.addEventListener("mousedown",function(){
   num9.setAttribute("style","transform:scale(1.20,1.20)")
  })
  num9.addEventListener("mouseout",function(){
    num9.setAttribute("style","transform:scale(1,1)")
  })
  on.addEventListener("mousedown",function(){
   on.setAttribute("style","transform:scale(1.20,1.20)")
  })
  on.addEventListener("mouseout",function(){
    on.setAttribute("style","transform:scale(1,1)")
  })
  punto.addEventListener("mousedown",function(){
   punto.setAttribute("style","transform:scale(1.20,1.20)")
  })
  punto.addEventListener("mouseout",function(){
    punto.setAttribute("style","transform:scale(1,1)")
  })
  sign.addEventListener("mousedown",function(){
   sign.setAttribute("style","transform:scale(1.20,1.20)")
  })
  sign.addEventListener("mouseout",function(){
    sign.setAttribute("style","transform:scale(1,1)")
  })
  mas.addEventListener("mousedown",function(){
   mas.setAttribute("style","transform:scale(1.20,1.20)")
  })
  mas.addEventListener("mouseout",function(){
    mas.setAttribute("style","transform:scale(1,1)")
  })
  raiz.addEventListener("mousedown",function(){
   raiz.setAttribute("style","transform:scale(1.20,1.20)")
  })
  raiz.addEventListener("mouseout",function(){
    raiz.setAttribute("style","transform:scale(1,1)")
  })
  tecla_divide.addEventListener("mousedown",function(){
   tecla_divide.setAttribute("style","transform:scale(1.20,1.20)")
  })
  tecla_divide.addEventListener("mouseout",function(){
    tecla_divide.setAttribute("style","transform:scale(1,1)")
  })
  tecla_multiplica.addEventListener("mousedown",function(){
   tecla_multiplica.setAttribute("style","transform:scale(1.20,1.20)")
  })
  tecla_multiplica.addEventListener("mouseout",function(){
    tecla_multiplica.setAttribute("style","transform:scale(1,1)")
  })
  tecla_resta.addEventListener("mousedown",function(){
   tecla_resta.setAttribute("style","transform:scale(1.20,1.20)")
  })
  tecla_resta.addEventListener("mouseout",function(){
    tecla_resta.setAttribute("style","transform:scale(1,1)")
  })
  igual.addEventListener("mousedown",function(){
   igual.setAttribute("style","transform:scale(1.20,1.20)")
  })
  igual.addEventListener("mouseout",function(){
    igual.setAttribute("style","transform:scale(1,1)")
  })
}
  function validateLeng(contenido ,value){
  if(contenido.length >= 8)
  {
    alert("no se permiten mas de 8 digitos")
  }
  else {
    pantalla.textContent += value;
  }
}
  function Operation(oper,value1,value2)  {
    switch (oper) {
     case "+":
        var result =  parseFloat(value1) + parseFloat(value2);
        validateResultLong(result);break;
     case "-":
        var result =  parseFloat(value1) - parseFloat(value2);
        validateResultLong(result);break;
     case "*":
      var result =  parseFloat(value1) * parseFloat(value2);
      validateResultLong(result);break;
     case "/":
      var result =  parseFloat(value1) / parseFloat(value2);
      validateResultLong(result);break;
     case "raiz":
      var result =   Math.sqrt(parseFloat(value1));
      validateResultLong(result);break;
    default:
    }
  }
  function validateResultLong(result){
    var vResult = result.toString();
    if (vResult.length >= 8) {
      pantalla.textContent= vResult.slice(0,8);
    }
    else {
      pantalla.textContent= vResult;
    }
  }
