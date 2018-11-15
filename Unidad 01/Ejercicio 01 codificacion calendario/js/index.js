var calendario = document.getElementById('calendario')
calendario.addEventListener("click",function(event){
  var mensaje = "Hiciste un click en la posicion: -> X: "+event.clientX + " Y: "+event.clientY;
  console.log(mensaje);
})
