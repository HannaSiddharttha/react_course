const persona={
    nombre:'flerky',
    edad:'5',
    clave:'gato'
};

const{nombre, edad, clave,}= persona;

const useContext = ({nombre, edad, rango = 'capitan'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);