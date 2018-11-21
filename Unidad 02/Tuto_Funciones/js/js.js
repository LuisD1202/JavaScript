function alertaMensaje(nombre,edad,estatura){
  alert("Mi nombre es: "+nombre+" mi edad es: "+edad+" años y mido: "+estatura +" CM");
}

alertaMensaje("Jorge",20,1.75);

function inicializa(){
  var prop = 42
  function mostrarPopUp(){
    alert(prop)
  }
  mostrarPopUp()
}

inicializa()
