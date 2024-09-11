function sumarNumeros(arrayNumeros) {
  let suma = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    suma += arrayNumeros[i];
  }
  return suma;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumarNumeros(numeros);
console.log(resultado); // Imprime 15

function calcularPromedio(arrayNumeros) {
  let suma = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    suma += arrayNumeros[i];
  }
  return suma / arrayNumeros.length;
}

// Ejemplo de uso
const promedio = calcularPromedio(numeros);
console.log(promedio); // Imprime 3

function convertirMayusculas(arrayPalabras) {
    let suma = "";
    for (let i = 0; i < arrayPalabras.length; i++) {
      suma += arrayPalabras[i] + " ";
    }
    return suma.toUpperCase();
  }
  
  // Ejemplo de uso
  const palabras = ["manzana", "pera", "frutilla"]
  const palabrasM = convertirMayusculas(palabras)
  console.log(palabrasM)


function soloPares(arrayPares){
  return arrayPares.filter(numero => numero % 2 === 0);
}

const pares = soloPares(numeros)
console.log(pares);