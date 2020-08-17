const axios = require('axios');
const colors = require('colors');

let obtenerDatos = async (busqueda) =>{

    const url_base = 'https://geocode.xyz/?locate=location?'
    const auth = '311802858688339290036x7105';
    // const ubicacion = argv.direccion;

    const encodedLocation = encodeURI(busqueda);

    
    const respuesta = await axios.get(`${url_base}city=${encodedLocation}&auth=${auth}&json=1`);

    
    const data = respuesta.data;
   
    const lat = data.latt;
    const lng = data.longt;
    
    
    if(respuesta.data.longt === '0.00000'){
        console.log('\n No se han encontrado resultados'.yellow);
        this.lat = 0;
        this.lng = 0;
        throw new Error('No hay resultados con esa busqueda');
    }

    const direccion = `${data.standard.city}`;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    obtenerDatos
}