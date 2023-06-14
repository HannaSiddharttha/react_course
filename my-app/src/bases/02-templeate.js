

const name = 'flerky';
const lastname = 'bola';

const personalName = '${name} ${lastname}';

console.log( personalName);

function getSaludo(){
    return 'flerky' + name;

}
console.log('this is a text: ${getSaludo(name)}');