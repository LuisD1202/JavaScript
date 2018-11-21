var = Usuario{
  NombreCompleto: ""
  NombreUsuario: ""
  Password: ""
  Email: ""
  Descripcion: ""
  TipoSuscripcion:""
  CiudadResidencia:""
  Direccion:""
  Telefono:""
  Celular:""
  Nacionalidad:""
  Masculino: false
  Femenino: false
  Efectivo: false
  Credito: false
  Fecha_nacimiento = ""
  ImprimeDatos: function()  {
    console.log("Nombre Completo: "+ this.NombreCompleto);
    console.log("Nombre Completo: "+ this.NombreUsuario);
    console.log("Nombre Completo: "+ this.Password);
    console.log("Nombre Completo: "+ this.Email);
    console.log("Fecha de nacimiento: "+ this.Fecha_nacimiento);
    console.log("Nombre Completo: "+ this.Descripcion);
    console.log("Nombre Completo: "+ this.Telefono);
    console.log("Nombre Completo: "+ this.Celular);
    console.log("Nombre Completo: "+ this.Nacionalidad);
    console.log("Nombre Completo: "+ this.Masculino);
    console.log("Nombre Completo: "+ this.Femenino);
    console.log("Nombre Completo: "+ this.Efectivo);
    console.log("Nombre Completo: "+ this.Credito);
    console.log("Nombre Completo: "+ this.NombreCompleto);
  }
}

document.getElementById("Enviar").addEventListener("click"),function(){
  Usuario.NombreCompleto =  document.getElementsByClassName("nombre")[0].value
  Usuario.nombreUsuario = document.getElementsByClassName('nombre_usuario')[0].value;
  Usuario.contrasena = document.getElementsByClassName('password')[0].value;
  Usuario.email = document.getElementsByName('email')[0].value;
  Usuario.Fecha_nacimiento = document.getElementsByName("fecha_nacimiento")[0].value
  Usuario.ciudad = document.getElementsByName('ciudad_residencia')[0].value;
  Usuario.descripcion = document.getElementsByTagName('textarea')[0].value;
  Usuario.suscripcion = document.getElementsByTagName('select')[0].value;
  Usuario.direccion = document.querySelector("input[name='direccion']").value;
  Usuario.telefono = document.querySelector("input[type='tel']").value;
  Usuario.celular = document.querySelectorAll("input[type='tel']")[1].value;
  Usuario.nacionalidad = document.querySelectorAll("input[name='nacionalidad']")[0].value;
  Usuario.masculino = document.getElementById('masculino').checked;
  Usuario.femenino = document.getElementById('femenino').checked;
  Usuario.efectivo = document.getElementById('efectivo').checked;
  Usuario.credito = document.getElementById('credito').checked;
  Usuario.imprimirDatos();
})
