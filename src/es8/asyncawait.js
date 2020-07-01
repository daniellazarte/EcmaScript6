//USO DE ASYNC Y AWAIT
const helloWorld = () => {
    return  new Promise((resolve, reject) => {
        (true) //esta es una foma de hacer if else
            ? setTimeout(() => resolve('Hellow World'),3000)
            : reject (new Error('Test Error'))
        

    });
}
//esta es una functcion que implementa async
const helloAsync = async () => {
    const  hello = await helloWorld();
    console.log(hello);

}

helloAsync();

//Manejar errores
const aof = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }

}