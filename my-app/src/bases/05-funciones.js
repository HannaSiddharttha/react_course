function saludar(nombre){
    return 'hola, ${nombre}';

}

const saludar2 = (nombre) => {
    return 'hola,${nombre}';
}

const saludar3 = (nombre) => 'hola, ${nombre}';

const saludar4 = () => 'hola flerky';

console.log(saludar2('flerky'));


console.log(user);

const getUsuario = ( nombre ) =>
    ({

        uid:'ABC567',
        username: nombre
    })

const usuario = getUsuario('flerky');
console.log(usuario);

