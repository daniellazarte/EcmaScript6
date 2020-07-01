//Ecmascript 9
//EL operador de Reposo

const obj = {
    name: 'daniel',
    age: 32,
    contry: 'Peru',
};

let  { name, ...all} = obj;
console.log(name,all);

//Propiedades de propagacion
const obj = {
    name: 'daniel',
    age: 32,

};

const obj1 = {
    ...obj,
    contry: 'Peru',
};

//Promises.finally saber cuando a terminado el llamado para ejecutar codigo
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hellow world'), 3000)
        : reject (new Error('Test Error'))

    });
}


helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

// uso de Regex


