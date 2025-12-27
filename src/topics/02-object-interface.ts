const skills: string[] = ['Bash', 'Counter', 'Healing'];
/* Podemos definir un arreglo que contenga varios tipos de datos, pero
en este caso no queremos que se salga del string, por eso condicionamos
la variable desde el principio string[]*/



/*si queremos que una variable tenga un tipo de dato específico, 
podemos crear una interfaz que defina ese tipo de dato*/
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
/*el signo de interrogación hace que la propiedad sea opcional*/

}

/*si no sabes si la variable va a cambiar en el proyecto es mejor que se
haga con una constante y no con let, las constantes son más ligerasque 
las variables let porque no tienen método de asignación */ 
const soniajdv: Character = {
    name: 'Soniajdv',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
};
/*Ctrl+. estando encima de soniajdv abre una pestaña con opciones
si clicamos en add missing properties y automáticamente te añade 
lo que falta, pero ahora mismo lo que hemos hecho es dar a hometown 
como opciconal*/

soniajdv.hometown = 'Sevilla';
/*table es otra forma de imprimir elementos*/ 
console.table(soniajdv);
