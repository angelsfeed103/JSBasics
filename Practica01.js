let frutas = ["manzana", "banana"]

// Agregar naranja al arreglo
frutas.push("naranja")

// Imprimir en consola
console.log(frutas)

// Eliminar el último elemento
frutas.pop()

// Imprimir en consola
console.log(frutas)

//-------------

let numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach(numero => console.log(numero))

//-------------

let numeros2 = [1, 2, 3, 4, 5, 6]

const multiplo_5 = numeros2.map(numero => numero * 5)

console.log(multiplo_5)

//-------------

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = numeros3.filter(numero => numero % 2 === 0)

console.log(pares)

//-------------

let numeros4 = [10, 20, 30, 40, 50, 60]

const mayor45 = numeros4.find(numero => numero > 45)

console.log(mayor45)

//-------------

let frutas2 = ["manzana", "banana", "naranja"]

const existe = frutas2.includes("naranja")

console.log(existe)

//-------------


let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nuevoArreglo = numeros5.slice(1, 4)

console.log(nuevoArreglo)

//-------------

let numeros6 = [1, 2, 3, 4]

const suma = numeros6.reduce((total, numero) => total + numero, 0)

console.log(suma)