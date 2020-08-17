

const {obtenerDatos} = require('./ubicaciones/ubicaciones');
const {obtenerClima} = require('./clima/clima');
const colors = require('colors');

const {argv} = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
});


obtenerDatos(argv.direccion)
.then(res => {
    
    const lat = res.lat;
    const lon = res.lng;

    obtenerClima(lat,lon)
    .then(resp => {
        console.log(`\nLa Temperatura en ${res.direccion.green} es de ${resp.main.temp} grados`);
    })
    .catch('Ocurrió un error inesperado, intente de nuevo'.yellow);

})
.catch(e =>{
});









