1./*Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year 
y asignar un valor, use el operador para verificar diferentes tipos de datos.*/

let firstName = "Miguel";
let lastName = "David";
let country = "Venezuela";
let city = "Caracas";
let age = 21;
let isMarried = "No";
let year = 2024;

console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);
console.log(year);

2.//Verifique si '10' es igual a 10//

let verificar = "10"
let verificado = 10

console.log(verificar);
console.log(verificado); 

//False//

3.//Verifique si parseInt('9.8') es igual a 10//

let flotante = parseInt("9.8");
let entero = 10;

console.log(flotante === entero);

console.log(parseInt)

//False//

4.//Verifique cualquier valor booleano true o false.//

true && false //false
false || true //true

5.//Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.//

 4 > 3 || 10 > 5; // true
 4 > 3 || 10 < 5; // true
 4 > 3 && 10 > 5; // true

6.//Escriba tres declaraciones de JavaScript que proporcionen un valor falso.//

 4 > 3 && 10 < 5; // false
 4 < 3 && 10 < 5; // false
 4 < 3 || 10 < 5; // false

7./*Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). 
Después de decidir el resultado, confirmelo usando console.log()*/

let a = 4 > 3 ;//True
let b = 4 >= 3; //True
let c = 4 < 3; //False
let d = 4 <= 3; //False
let e = 4 == 4; //True
let f = 4 === 4; //True
let g = 4 != 4; //False
let h = 4 !== 4; //False
let i = 4 != '4'; //False
let j = 4 == '4'; //True
let k =  4 === '4'; //False     

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);

8.//Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.//

let pythonLength = "Python".length;
let jargonLength = "jargon".length;

console.log("La longitud de Python no es igual a la longitud de jargon " + (pythonLength != jargonLength));

9./*Calcule primero el resultado de las siguientes expresiones sin usar console.log(). 
Después de decidir el resultado, confirmelo usando console.log()

a. 4 > 3 && 10 < 12 //true
b. 4 > 3 && 10 > 12 // false
c. 4 > 3 || 10 < 12 //true
d. 4 > 3 || 10 > 12 //true
e. !(4 > 3) //false
f. !(4 < 3) //true
g. !(false) //true
h. !(4 > 3 && 10 < 12) //false
i. !(4 > 3 && 10 > 12) //true
j. !(4 === '4') // true
k. No hay 'on' tanto en dragon como en python // true*/

console.log(4 > 3 && 10 < 12); // a. true
console.log(4 > 3 && 10 > 12); // b. false
console.log(4 > 3 || 10 < 12); // c. true
console.log(4 > 3 || 10 > 12); // d. true
console.log(!(4 > 3));          // e. false
console.log(!(4 < 3));          // f. true
console.log(!(false));          // g. true
console.log(!(4 > 3 && 10 < 12));// h. false
console.log(!(4 > 3 && 10 > 12));// i. true
console.log(!(4 === '4'));      // j. true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // k. true


10./*Utilice el objeto Date para realizar las siguientes actividades

¿Qué año es hoy?
¿Qué mes es hoy con un número?
¿Qué fecha es hoy?
¿Qué día es hoy con un número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.*/

const fechaActual = new Date();

console.log("¿Qué año es hoy?");
console.log(fechaActual.getFullYear());

console.log("¿Qué mes es hoy con un número?");
console.log(fechaActual.getMonth() + 1); // Se suma 1 porque los meses comienzan desde 0

console.log("¿Qué fecha es hoy?");
console.log(fechaActual.getDate());

console.log("¿Qué día es hoy con un número?");
console.log(fechaActual.getDay()); // Los días de la semana comienzan desde 0 (Domingo)

console.log("¿Cuál es la hora actual?");
console.log(fechaActual.getHours());

console.log("¿Cuántos minutos hay actualmente?");
console.log(fechaActual.getMinutes());

console.log("Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.");
console.log(Math.floor(fechaActual.getTime() / 1000)); 

11./*Escriba un script que solicite al usuario que ingrese la base y la altura 
del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

Ingrese base: 20
Ingrese altura: 10
El área del triángulo es: 100*/

let base = prompt("Ingrese la base del triangulo a calcular.");
let altura = prompt("Ingrese la altura del triangulo a calcular");

let area = 0.5 * base * altura;
console.log("El area de el triangulo es: " + area);

12./*Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c 
del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

Ingrese lado a: 5
Ingrese lado b: 4
Ingrese lado c: 3
El perimetro del triangulo es: 12*/

let primerLado = prompt("Ingrese el lado A del triangulo a calcular.");
let segundoLado = prompt("Ingrese el lado B del triangulo a calcular");
let tercerLado = prompt ("Ingrese el lado C del triangulo a calcular ");

let perimetro = primerLado + segundoLado + tercerLado
console.log("El perimetro del triangulo es: " + perimetro);

13./*Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo 
(área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))*/

let largo = prompt("Ingrese el largo del triangulo a calcular");
let ancho = prompt("Ingrese el ancho del triangulo a calcular");

let newperimetro = 2 * (largo + ancho);
let areas = largo * ancho;

console.log("El perimetro del triangulo es: " + newperimetro + " y su area es: " + areas);

14./*Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) 
y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.*/

let radio = prompt("Ingrese el radio del circulo a calcular");
let areaCirculo = pi * radio * radio;
let circunferencia = 2 * pi * radio;
let pi = 3.14;

console.log("El area del circulo ingresado es: " + areaCirculo + " y su circunferencia es: " + circunferencia);

15./*Escriba un script con prompt que solicite al usuario que ingrese las horas 
y la tarifa por hora. ¿Calcular el salario de la persona?

Ingrese horas: 40
Introduce la tarifa por hora: 28
Su ganancia semanal es 1120*/

let horasTrabajadas = prompt("Ingrese las horas trabajadas:");
horasTrabajadas = parseFloat(horasTrabajadas);

let tarifaPorHora = prompt("Ingrese la tarifa por hora:");
tarifaPorHora = parseFloat(tarifaPorHora);

let salarioSemanal = horasTrabajadas * tarifaPorHora;
console.log("Su ganancia semanal es: " + salarioSemanal);


16./*Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; 
de lo contrario, diga que su nombre es corto.*/

let nombre = prompt("Ingrese su nombre:");
let mensaje = (nombre.length > 7) ? "Su nombre es largo." : "Su nombre es corto.";
console.log(mensaje);

17./*Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

let myAge = 250;
let yourAge = 25;
Soy 225 años mayor que tú.*/

let myAge = 250;
let yourAge = 25;

let diferenciaEdades = myAge - yourAge;
console.log(`Soy ${diferenciaEdades} años mayor que tú.`);

18./*Usando prompt, obtenga el año en que nació el usuario y, 
si el usuario tiene 18 años o más, permita que el usuario conduzca, 
si no dígale que espere una cierta cantidad de años.

Introduzca el año de nacimiento: 1995
Tienes 25 años. Tienes la edad suficiente para conducir.

Introduzca el año de nacimiento: 2005
Tienes 15 años. Podrás conducir después de 3 años.*/

let añoNacimiento = prompt("Introduce el año de nacimiento:");
añoNacimiento = parseInt(añoNacimiento);

let currentYear = new Date().getFullYear();
let edad = currentYear - añoNacimiento;

let mensajes = (age >= 18) ?
  `Tienes ${edad} años. Tienes la edad suficiente para conducir.` :
  `Tienes ${edad} años. Podrás conducir después de ${18 - edad} años.`;

console.log(mensajes);

19./*Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

Ingrese el número de años de vida: 100
 Viviste 3153600000 segundos.*/

let edades = prompt("Ingrese su edad:");
edades = parseInt(edades);

let segundosDeVida = edades * 365 * 24 * 60 * 60;
console.log(`Viviste ${segundosDeVida} segundos.`);

