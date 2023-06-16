const personajes =['Goku','Vegeta','Trunks'];

const [, , p3] = personajes;


console.log(p3);


const retornoArreglo = () =>{
    return['ABC', 123];
}

const [letras, numeros] = retornoArreglo();
    console.log_(letras,numeros);


const useState = (valor)=> {
    return [ valor, ()=>{console.log('hola flerky')}];

}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();
