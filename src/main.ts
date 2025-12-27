import './style.css';
/*he borrado 3 imports que había*/ 
// import './topics/01-basic-types'
//import './topics/02-object-interface';
import './topics/03-functions';
const app = document.querySelector<HTMLDivElement>('#app')!;
/*he borrado todo el div que había y el innerhtml despues #app*/ 
app.innerHTML = `Hola Mundo!`;
console.log('Hola Mundo!');
/*para ver la terminal de la web atajo: ctrl+shift+j*/ 

