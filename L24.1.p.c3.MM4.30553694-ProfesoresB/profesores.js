let profesores = [
  {
    categoria: 1,
    nombre: "Ana",
    sexo: "F",
  },
  {
    categoria: 2,
    nombre: "Alberto",
    sexo: "M",
  },
  {
    categoria: 3,
    nombre: "Antonio",
    sexo: "M",
  },
  {
    categoria: 4,
    nombre: "María",
    sexo: "F",
  },
  {
    categoria: 5,
    nombre: "Fabiana",
    sexo: "F",
  },
];

let profcategoriaYSexo = (profesores, categoria, sexo) => {
  let prof = [];
  profesores.forEach((p) => {
    if (p.categoria == categoria && p.sexo === sexo) prof.push(p);
  });
  return prof;
};

let salida = document.getElementById("salida");
salida.innerHTML = "Resultados";
salida.innerHTML += `<br> profesores por Categoría:`;
salida.innerHTML +=
  "<br> Categoría 1 Masculinos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 1, "M"));
salida.innerHTML +=
  "<br> Categoría 1 Femeninos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 1, "F"));
salida.innerHTML +=
  "<br> Categoría 2 Masculinos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 2, "M"));
salida.innerHTML +=
  "<br> Categoría 2 Femeninos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 2, "F"));
salida.innerHTML +=
  "<br> Categoría 3 Masculinos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 3, "M"));
salida.innerHTML +=
  "<br> Categoría 3 Femeninos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 3, "F"));
salida.innerHTML +=
  "<br> Categoría 4 Masculinos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 4, "M"));
salida.innerHTML +=
  "<br> Categoría 4 Femeninos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 4, "F"));
salida.innerHTML +=
  "<br> Categoría 5 Masculinos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 5, "M"));
salida.innerHTML +=
  "<br> Categoría 5 Femeninos:" +
  JSON.stringify(profcategoriaYSexo(profesores, 5, "F"));
