//Como se hacia antes
function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'PE'

    console.log(name,age,country);
}

//En ecmaScript 6
function  newFunction2(name='Oscar',age=32,country='PE'){
    console.log(name,age,country);
}
//Para llamar a la funcion
newFunction2();
newFunction2('Daniel',32,'PE');
let hello = "hellow";
let world = "World";
let frasecompleta = `${hello} ${world}`;
console.log(frasecompleta)


//CLase 3 Let const 
let lorem = "UNa frase epica ajuaaaa \n" + 
"Otra frase mas"

let lorem2= `MI frase epica ecma6 
ajuaaaaaa
multilinea `;
console.log(lorem2);

//Destructuracion de Elementos
let person = {
    name:'Daniel',
    age:32,
    country:'PE'
}
// Esta es la nueva destructuracion
let {name,age,country} = person;
console.log(name,age,country);


//Operador de Propagacion que permite expandir de varias situaciones varioe elementos
//Siurve para unir arreglos
let team1 =['OScar','Julian','Ricardo'];
let team2 =['Maria','Pedro','Javier'];
let education = ['Oscar',... team1, ...team2];
console.log(education);

//Uso de let

{var globalvar = "Global var";}
{
    let globallet = "Global let";
    console.log(globallet);
}

console.log(globalvar);

//uso de const
const a = 1;
//a jamas cambiara de valor



//PArametros en objetos
let name ="Daniel";
let age = 32
//antes se hacia asi:
obj= {name:name,age:age};

//Y ahora se hace asi en ECS6
obj2 = {name,age};
console.log(obj2);


//Arrow functions en EC6
const name = [
    {name:'Daniel',age:32},
    {name:'Oscar',age:35}
]

//Antes si yo queria iterar usaba el metodo MAP
let  listOfNames = name.map(function(item){
    console.log(item.name);
});

//Ahora con arrow functions
let listofitems2 = names.map(item => console.log(item.name));

//otra forma
let listofnames3 = (name,age) =>{
    console.log()
}

//Otra forma

const listofname4 = name =>{

}

//otra forma 
const square = num => num * num

//Uso de las Promesas para trabajar el asincronismo
const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(true)
        {
            resolve('hey...')
        }else{
            reject('UPS!!')
        }

    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));



//Clase 5 Clases modulos y generadores
class calculator{
    calculator(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valuea,valueb){
        this.valueA= valuea;
        this.valueB = valueb;

        return this.valueA + this.valueB;


    }
}

const calc = new calculator();
console.log(calc.sumar(10,10));

//Import y Export TRabajo con MOdulos.
//importar un archivo
import { hello } from './module';
hello();

//Generators
function* helloWorls(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorls();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);