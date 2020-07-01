//Ecma Script 8
//Object.entries permite devuelve la clave y los valores de una matriz

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    Design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

//Uso de Object values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    Design: 'Ana',
}

//de esta forma se transforma la data
const values = Object.values(data);
console.log(values)
console.log(values.length)


// uso de padstart añade hi antes del string
const string = 'hello';
console.log(string.padStart(7,'hi'))

console.log(string.padEnd(12,'------'))