
document.getElementById('boton-receta1').addEventListener('click', function(){

var ingrediente1 = "Claras de huevo"
var ingrediente2 = "Azucar blanca"
var ingrediente3 = "Leche condensada"
var ingrediente4 = "Gelatina sin sabor"
var ingrediente5 = "Limones"

var cant_ingrediente1 = 5
var cant_ingrediente2 = 150
var cant_ingrediente3 = 200
var cant_ingrediente4 = 1
var cant_ingrediente5 = 4

console.log("Preparacion Postre de Limón");

console.log("Primero debes adicionar las "+ cant_ingrediente1 + " " + ingrediente1 +" en un Bol y batir con los "+ cant_ingrediente2 +" gramos de "+ ingrediente2 +"; luego debes adicionar los " + cant_ingrediente3 + " gramos de " + ingrediente3 + " y batir bien. Una vez termines con esto, adiciona el zumo de los "+ingrediente5+" y la "+ingrediente4+ " hidratada en agua tibia. Por último deposita la mezcla en moldes individaules y mételo a la nevera. ¡En 30 minutos tu postre estará listo!");

})

document.getElementById('boton-receta2').addEventListener('click', function(){

  var ingrediente1 = "Ginebra"
  var ingrediente2 = "Vermouth Seco"
  var ingrediente3 = "Aceituna"

  var cant_ingrediente1 = 2.5
  var cant_ingrediente2 = 0.5
  var cant_ingrediente3 = 1

  console.log("Preparacion Martini");

  console.log("Para preparar un Martini básico debes verter el "+ ingrediente1 +" en una coctelera y añadir el "+ ingrediente2 +". Para servir, pon la mezcla en una copa tipo Martini y añade una "+ ingrediente3 + ".");
})
