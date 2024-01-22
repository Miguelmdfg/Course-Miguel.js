1.//Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.//

let desafío = "30 días de Javascript";

2.//Imprima la cadena en la consola del navegador usando console.log()//

console.log(desafío);

3.//Imprima la longitud de la cadena en la consola del navegador usando console.log()//

console.log(desafío.length);

4.//Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()//

console.log(desafío.toUppercase());

5.//Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()//

console.log(desafío.toLowerCase());

6.//Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()//

console.log(desafío.substring(11, 21));
console.log(desafío.substr(11, 21));

7.//Corta la frase Days Of JavaScript de 30 Days Of JavaScript.//

console.log(desafío.substring(0, 3));

8.//Verifique si la cadena contiene una palabra Script usando el método includes()//

console.log(desafío.includes("script"));

9.//Divide la cadena en un array usando el método split()//

console.log(desafío.split(" "));

10.//Divida la cadena 30 días de JavaScript en el espacio usando el método split()//

console.log(desafío.split(" "));

11.//Cambie 30 días de JavaScript a 30 días de Python usando el método replace().//

console.log(desafío.replace("Javascript", "Python"));

12.//¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().//

console.log(desafío.charAt(15));

13.//¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()//

console.log(desafío.charCodeAt(11)); // 74

14.//Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript//

console.log(desafío.indexOf("a"));

15///.Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.//

console.log(desafío.lastIndexOf("a"));

16./*Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente 
oración:'No puedes terminar una oración con porque porque porque es una conjunción'*/

let oracion = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(oracion.indexOf("porque"));

17./*Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente 
oración:'No puedes terminar una oración con porque porque porque es una conjunción'*/

console.log(oracion.lastIndexOf("porque"));

18./*Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente 
oración:'No puedes terminar una oración con porque porque porque es una conjunción'*/

console.log(oracion.search("porque"));

19./*Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. 
Por ejemplo, '30 días de JavaScript'.Use el método startsWith() con la cadena 30 días de JavaScript 
y haga que el resultado sea verdadero*/

console.log(desafío.trim(" "));
console.log(desafío.startsWith("30"));

20.//Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero//

console.log(desafío.endsWith("Javascript"));

21.//Usa el método match() para encontrar todos los a en 30 días de JavaScript//

let coincidencias = desafío.match(/a/g);
console.log(coincidencias);

22.//Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'//

let string = "30 dias de";
console.log(string.concat("JavaScript"));

23.//Use el método repeat() para imprimir 30 días de JavaScript 2 veces//

console.log(desafío.repeat(2));

24./*Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'. 
divide la cadena en la coma y cámbiala a una matriz.*/

let cadena = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let matriz = cadena.split(', ');

console.log(matriz);

25./*Usando console.log() imprima la siguiente declaración:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/

let declaración = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(declaración);

26./*Usando console.log() imprima la siguiente cita de la Madre Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- 
with charity you give love, so don't just give money but reach out your hand instead."*/

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

27.//Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual//

let comparacion = "10"
console.log(comparacion === 10);


