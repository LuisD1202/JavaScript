var Paciente ={
  nombre: "Gabriel Santos",
  ciudad: "Bogotá",
  entidad_de_salud: "Famisanar",
  peso: 65,
  Estatura: 1.58,
  fechaNacimiento: new Date("April 3, 1979"),
  ultimaConsulta: {
    fecha: new Date("June 23, 2016"),
    anotaciones: ["El paciente no presenta signos de dolor en las cicatrices de la cirugía",
                  "Presión arterial media normal",
                  "Se mencionan repetidos dolores en la zona abdominal"]
  },
  historiaClinica: [
    ["Fractura de fémur","3/11/2015"],
    ["Apendicitis","22/8/2015"],
    ["Insuficiencia Renal","1/3/2013"]
  ],
  calcularEdad: function(){
    var hoy = new Date();
    var edad = hoy.getFullYear()-this.fechaNacimiento.getFullYear();
    return edad;
  },
  calcularIMC: function(){
    var imc = this.peso/Math.pow(this.Estatura,2);
    return imc.toFixed(2);
  },
  imprimirDatos:function(){
    console.log("Nombre: "+this.nombre);
    console.log("Ciudad: "+this.ciudad);
    console.log("Entidad de salud: "+this.entidad_de_salud);
    console.log("Peso "+this.peso);
    console.log("Estatura "+this.Estatura);
    console.log("Fecha de nacimiento: "+this.fechaNacimiento.toString());
    console.log("Fecha ultima consulta " +this.ultimaConsulta.fecha.toString());
    console.log("Anotaciones ultima consulta: "+this.ultimaConsulta.anotaciones[0]+", "+this.ultimaConsulta.anotaciones[1]+", "+this.ultimaConsulta.anotaciones[2]);
    console.log("Historia Clinica "+this.historiaClinica[0][0]+" - "+this.historiaClinica[0][1]+"   "+this.historiaClinica[1][0]+" - "+this.historiaClinica[1][1]+"   "+this.historiaClinica[2][0]+" - "+this.historiaClinica[2][1]+"");
    console.log("Calculos: ");
    console.log("- Edad "+this.calcularEdad());
    console.log("- Indice de masa corporal "+this.calcularIMC());
  },
}
document.getElementById('boton-perfil').addEventListener("click", function(){
  Paciente.imprimirDatos();
})
