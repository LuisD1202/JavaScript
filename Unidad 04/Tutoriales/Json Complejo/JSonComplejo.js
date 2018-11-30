var Estructura =
{
  "Personas":
  [
    {
      "Nombre" : "Mateo",
      "Edad" : 24,
      "Direccion": "Calle 76",
      "Telefono": "(057) 3212180461",
      "Estudios":
      [
        {
          "Primaria":
          {
            "Lugar": "La estancia",
            "Fecha": "2000 - 2005"
          }
        },
        {
          "Secundaria":
          {
            "Lugar": "La estancia",
            "Fecha": "2006 - 2010"
          }
        }
      ]
    },
    {
      "Nombre" : "Jose",
      "Edad" : 30,
      "Direccion": "carrera 76",
      "Telefono": "(057) 3142050038",
      "Estudios":
      [
        {
          "Primaria":
          {
            "Lugar": "La Victoria",
            "Fecha": "2005 - 2008"
          }
        },
        {
          "Secundaria":
          {
            "Lugar": "San bartolome",
            "Fecha": "2009 - 2015"
          }
        }
      ]
    }
  ]
}

var persona1 = Estructura.Personas[0]
var persona2 = Estructura.Personas[1]

var TelPersona1 = persona1.Telefono;
var TelPersona2 = persona2.Telefono;

var EstudiosPersona1 = persona1.Estudios[0];
var EstudiosPersona2 = persona2.Estudios[1];
