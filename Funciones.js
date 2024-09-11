function convertirAMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  let resultado = convertirAMayusculas("hola mundo");
  console.log(resultado); // Imprime "HOLA MUNDO"

function convertirAMinusculas(texto) {
    return texto.toLowerCase();
  }

  resultado = convertirAMinusculas("HOLA MUNDO");
  console.log(resultado); // Imprime "hola mundo"


function restaNum(numero1, numero2){
    return numero1 - numero2;
}
let resultadoResta = restaNum(10, 4);
console.log(resultadoResta)

function divideNum(numero1, numero2){
    return numero1 / numero2;
}
let resultadoDivision = divideNum(10, 5);
console.log(resultadoDivision)

function multiplicaNum(numero1, numero2){
    return numero1 * numero2;
}
let resultadoMulti = multiplicaNum(10, 6);
console.log(resultadoMulti)

function largoString (palabra){
    return palabra.length;
}


let largoNombre = largoString('Chris')
console.log('El largo es de '+ largoNombre + ' carácteres')

