// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'saludos';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 11;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}

function resta(x, y) {
  // "x" e "y" son números
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function multiplica(x, y) {
  // "x" e "y" son números
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}

function divide(x, y) {
  // "x" e "y" son números
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
  
}

function sonIguales(x, y) {
  if (x == y) {
  // Devuelve "true" si "x" e "y" son iguales
  return true;
}
  // De lo contrario, devuelve "false"
  // Tu código:
  return false;
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  return true;
}
  // De lo contrario, devuelve "false"
  // Tu código:
  return false;
}

function menosQueNoventa(num) {
  if (num < 90) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  return true;
}
  // De lo contrario, devuelve "false"
  // Tu código:
  return false;
}

function mayorQueCincuenta(num) {
  if (num > 50) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  return true;
}
  // De lo contrario, devuelve "false"
  // Tu código:
  return false;
}

function obtenerResto(x, y) {
  // "x" e "y" son números
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

function esPar(num) {
  if (num % 2 == 0 ) {
  // Devuelve "true" si "num" es par
  return true; 
} 
  // De lo contrario, devuelve "false"
  // Tu código:
  return false;
}

function esImpar(num) {
  if (num % 2 != 0 ) {
  // Devuelve "true" si "num" es impar
  return true;
  }
  // De lo contrario, devuelve "false"
  // Tu código:
  return false;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow (num, 2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow (num, 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow (num, exponent)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round (num)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil (num)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()*1;
}

function esPositivo(numero) {
  if (numero > 0) {
    return 'Es positivo';
  }
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero < 0) {
  return 'Es negativo';
  }
return false;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + ' ' + apellido;
}

function obtenerSaludo(nombre) {
  var str = 'Hola';
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return str + ' ' + nombre + '!';
}

function obtenerAreaRectangulo(alto, ancho) {
  var area = alto * ancho;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return area;
}


function retornarPerimetro(lado){
  var perimetro = lado * 4;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return perimetro;
}


function areaDelTriangulo(base, altura){
  var area = (base * altura) / 2;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return area;
}


function deEuroAdolar(euro){
  var cambio = (euro * 1.20);
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return cambio;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length < 2) {

    if (letra == 'a') {
      return 'Es vocal';
    }
    if (letra == 'e') {
      return 'Es vocal';
    }
    if (letra == 'i') {
      return 'Es vocal';
    }
    if (letra == 'o') {
      return 'Es vocal';
    }
   if (letra == 'u') {
      return 'Es vocal';
    }
    return 'Dato incorrecto';
  }
  return 'Dato incorrecto';

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
