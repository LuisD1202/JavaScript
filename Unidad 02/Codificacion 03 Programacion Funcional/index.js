var IVA = 0.16
var Pedido1 = {
  cliente: "Federico Gutierrez",
  productos: ["Manzanas", "Refrescos", "Azucar", "Sal", "Lechugas frescas"],
  precios: [500, 4000, 2500, 2000, 5000],
  cantidad: [20, 10, 3, 3, 10]
}
var Pedido2 = {
  cliente: "Andres Felipe Liberato",
  productos: ["Naranjas", "Leche", "Queso", "Pan"],
  precios: [1000, 2000, 3000, 1500],
  cantidad: [50, 2, 2, 20]
}

var resultado = 0
var premio = ""
var valorTotal = 0

// Algoritmo de calculo

function CalculoPedido(Pedido, callback){
  for (var indice in Pedido.productos) {
    resultado = resultado + (Pedido.precios[indice] * Pedido.cantidad[indice])
  }
  valorTotal = resultado + (resultado * IVA)
  if (valorTotal > 10000) {
    premio = "Tiene derecho a un premio"
  } else {
    premio = "No tiene derecho a un premio"
  }

  var mensaje  = "Señor(a) "+Pedido.cliente+ " El valor de la compra es "+ resultado + " y aplicando el IVA "+valorTotal+ ", debido al monto de su pedido usted " + premio
  callback(mensaje)
}
function callbackAviso(mensaje){
  alert(mensaje)
}

var button1 = document.getElementById('calculo1')
  button1.addEventListener('click', function()
  {
    CalculoPedido(Pedido1,callbackAviso)
  })

var button2 = document.getElementById('calculo2')
  button2.addEventListener('click', function()
  {
    CalculoPedido(Pedido2,function(mensaje)
    {
      alert(mensaje)
    })
  })
