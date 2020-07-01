//EcmaScript 10 uso de FLat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat())

//Flatmap
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2]))

//Uso de TrimStart
let hello = '  hola    este es mi NOmbre';
console.log(hello.trimStart());

//Optional Catch Binding
try {

} catch {
    error
}

// FromEntries Transforma clave valor en Objetos
let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries))

//Uso de Symbol
