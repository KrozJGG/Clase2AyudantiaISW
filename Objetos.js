const persona = {
    nombre : 'Christian',
    edad : 22,
    genero : 'Masculino'
}

console.log(persona)

// Creación del objeto caja
const caja = {
    cuadernos: 10,
    lapices: 20,
    papel: 'A4',
    fotografias: ['foto1.jpg', 'foto2.jpg'],
    estado: 'en buen estado'
  };
  
  // Imprimir el objeto entero por consola
  console.log("Objeto completo:", caja);
  
  // Imprimir cada propiedad del objeto y su tipo de dato
  for (let propiedad in caja) {
    console.log(`${propiedad}: ${caja[propiedad]} (Tipo de dato: ${typeof caja[propiedad]})`);
  }
  