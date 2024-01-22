1./*Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). 
Si el usuario tiene 18 años o más, muestre el mensaje: 
'Tiene la edad suficiente para conducir', pero si no tiene 18 años, 
brinde otro mensaje que indique que debe esperar la cantidad de años 
que necesita para cumplir 18.*/

let entradaEdad = prompt("Ingrese su edad: ");

if (entradaEdad >= 18) {
    console.log("Tiene la edad suficiente para conducir");
} else {
    let anosFaltantes = 18 - entradaEdad;
    console.log("Debes esperar " + anosFaltantes + " años para poder conducir");
}

2./*Compara los valores de myAge y yourAge usando if... else. Según la comparación,
registre el resultado en la consola indicando quién es mayor (tú o yo). 
Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.*/

const myAge = 21;
let yourAge = prompt("Ingrese su edad: ");

yourAge = parseFloat(yourAge)

if (yourAge > myAge) {
    console.log("Eres mayor que yo.");
}else if (yourAge < myAge){
    console.log("Eres menor que yo.");
}else {
    console.log("Tenemos la misma edad.");
}

3./*Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 
'a es menor que b'. Trate de implementarlo de maneras diferentes

*Usando if else*/


let a = prompt("Ingrese el valor de a:");
let b = prompt("Ingrese el valor de b:");

a = parseFloat(a);
b = parseFloat(b);

if (!isNaN(a) && !isNaN(b)) {
  if (a > b) {
    console.log('a es mayor que b');
  } else {
    console.log('a es menor que b');
  }
} else {
  console.log('Por favor, ingrese números válidos.');
}

4. /*Los números pares son divisibles por 2 y el resto es cero. 
¿Cómo verificar si un número es par o no usando JavaScript?*/


let numero = prompt("Ingrese un número:");
numero = parseInt(numero);

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
  } else {
    console.log(numero + " no es un número par.");
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}

5./*Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/ 

let puntaje = prompt("Ingrese el puntaje del estudiante:");

puntaje = parseFloat(puntaje);

if (!isNaN(puntaje)) {
  if (puntaje >= 80 && puntaje <= 100) {
    console.log("Calificación: A");
  } else if (puntaje >= 70 && puntaje < 80) {
    console.log("Calificación: B");
  } else if (puntaje >= 60 && puntaje < 70) {
    console.log("Calificación: C");
  } else if (puntaje >= 50 && puntaje < 60) {
    console.log("Calificación: D");
  } else if (puntaje >= 0 && puntaje < 50) {
    console.log("Calificación: F");
  } else {
    console.log("El puntaje ingresado no está en el rango válido (0-100).");
  }
} else {
  console.log("Por favor, ingrese un puntaje válido.");
}


6.//Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.//

let dia = prompt("Ingrese un día de la semana:");

dia = dia.toLowerCase();

if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "miércoles" || dia === "viernes") {
  console.log(dia + " es un día laborable.");
} else if (dia === "sábado" || dia === "domingo") {
  console.log(dia + " es un día de fin de semana.");
} else {
  console.log("Por favor, ingrese un día válido de la semana.");
}
