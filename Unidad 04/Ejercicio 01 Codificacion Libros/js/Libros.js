var Libros =
{
  "Libros":
  [
    {
      "codigo" : 0001,
      "titulo" : "Steve Jobs",
      "editorial" : "Norma",
      "fecha_publicacion" : "2015",
      "edicion" : "primera",
      "estado" : "disponible",
      "numero_paginas" : 150,
      "numero_copias" : 5,
      "autores" :
      [
        {
          "Nombre":"Markkula",
          "Fecha_nacimiento":"1950",
          "Nacionalidad":"Sueco",
        },
        {
          "Nombre":"Wozniak",
          "Fecha_nacimiento":"1965",
          "Nacionalidad":"Frences",
        },
      ]
    },
    {
      "codigo" : 0002,
      "titulo" : "Garzon",
      "editorial" : "Panamericana",
      "fecha_publicacion" : "2018",
      "edicion" : "Segunda",
      "estado" : "Sin disponibilidad",
      "numero_paginas" : 105,
      "numero_copias" : 1,
      "autores" :
      [
        {
          "Nombre":"Gillermo cano",
          "Fecha_nacimiento":"1920",
          "Nacionalidad":"Colombiano",
        },
        {
          "Nombre":"Juan Gillermo Cano",
          "Fecha_nacimiento":"1950",
          "Nacionalidad":"Colombiano",
        },
      ]
    },
    {
      "codigo" : 0003,
      "titulo" : "yo mate a Escobar",
      "editorial" : "Esc",
      "fecha_publicacion" : "2011",
      "edicion" : "Cuarta",
      "estado" : "disponible",
      "numero_paginas" : 550,
      "numero_copias" : 2,
      "autores" :
      [
        {
          "Nombre":"Espectador",
          "Fecha_nacimiento":"1847",
          "Nacionalidad":"Colombia",
        },
        {
          "Nombre":"Ariel Velez",
          "Fecha_nacimiento":"1865",
          "Nacionalidad":"Peruano",
        },
      ]
    }
  ]
}


var book = Libros.Libros[1]

var titulo1 = book.titulo;
var codigo = book.codigo;
var FechaPubli = book.fecha_publicacion;


  alert("el libro "+titulo1+ " tiene el codigo " +codigo+ " y fue publicado en "+FechaPubli)
