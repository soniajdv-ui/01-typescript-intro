
function addNumbers(a: number, b: number) {  
    return a + b;
}
/*cuando ponemos el cursor encima de addNumbers los : significa que 
la función retorna o devuelve, cuando no se define el return y se ve un void 
es que la función no devuelve nada*/ 

//función de flecha indica que es una función y su valor de retorno
const  addNumbersArrow = (a: number, b: number):string => {
    return `${ a + b }`;
}
    /*podemos definir el tipo de dato que devuelve la función, en este caso
    devuelve un string, por eso usamos las comillas invertidas para 
    que lo tome como string*/

function multiply( firstNumber: number, secondNumber?: number, base: number = 2){
    return  firstNumber * base;
}
/*va justo en ese orden, los obligatorios (firstnumber) los opcionales
(secondnumber) y los que tienen valor por defecto (base = 2)*/



const result: number = addNumbers(5, 10);
const result2: string = addNumbersArrow(5, 10);
const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult}); 
//si no le ponemos llaves nos lo imprime sin nombre (directamente el 15)