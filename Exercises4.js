const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

1.//Declara un array vacío.//

let arr = Array();

2.//Declara un array com mas de 5 elementos.//

const familia = ["Felix T", "Mary", "Zuleika", "Felix M", "Miguel", "Mathias", "Samantha"]

3.//Encuentra la longitud de tu array.//

console.log("Mi familia es: ", familia);
console.log("Somos una familia de: ", familia.length);

4.//Obtenga el primer elemento, el elemento del medio y el último elemento de un array.//

const primerElemento = familia[0];
const elementoDelMedio = familia[Math.floor(familia.length / 2)];
const ultimoElemento = familia[familia.length - 1];

console.log("Primer elemento:", primerElemento);
console.log("Elemento del medio:", elementoDelMedio);
console.log("Último elemento:", ultimoElemento);

5./*Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre 
la longitud del array. El tamaño del array debe ser mayor que 5.*/

const mixedDataTypes = [42, "Hola", true, { nombre: "Juan", edad: 25 }, ["manzana", "plátano"], null];

const longitudDelArray = mixedDataTypes.length;
console.log("El array mixedDataTypes tiene una longitud de:", longitudDelArray);


6./*Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google,
Microsoft, Apple, IBM, Oracle y Amazon.*/

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

7.//Imprima el array usando console.log().//

console.log(itCompanies);

8.//Imprima el número de empresas en el array.//

console.log(itCompanies.length);

9.//Imprime la primer empresa , la intermedia y la última empresa//

const primeraEmpresa = itCompanies[0];
const empresaIntermedia =itCompanies[math.floor(itCompanies / 2)];
const ultimaEmpresa = itCompanies[itCompanies.length -1];

10.//Imprime cada empresa.//



11.//Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.//

12./*Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon 
son grandes empresas de TI.*/

13./*Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; 
de lo contrario, retorna la empresa no existe*/

14.//Filtre las empresas que tienen más de una 'o' sin el método filter()//

15.//Ordene el array usando el método sort()//

16.//Invierte la array usando el método reverse()//

17.//Cortar las primeras 3 empresas del array//

18.//Cortar las últimas 3 empresas del array//

19.//Cortar la empresa o empresas intermedias de TI del array//

20.//Eliminar la primera empresa de TI del array//

21.//Eliminar la empresa o empresas intermedias de TI del array//

22.//Elimine la última empresa de TI del array//

23.//Eliminar todas las empresas de TI//