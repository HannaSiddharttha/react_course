
const persona = {
    name:'atun',
    lastname: 'flerky',
    age:'12',
    adress:{
        city:'merida',
        zip:'97203',
        lat:'14.3232'

    }};

console.log(persona);

const persona2 = {...persona};
persona2.name ='chiri';

console.log(persona2)