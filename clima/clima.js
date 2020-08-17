const axios = require('axios');
// const colors = require('colors');

let obtenerClima = async (lat, lon) =>{

 
    const url_base = 'https://api.openweathermap.org/data/2.5/weather?'
    const auth = '870b580318bb872599d5198a57355eed';


    const respuesta = await axios.get(`${url_base}lat=${lat}&lon=${lon}&appid=${auth}&units=metric`);

    return respuesta.data;
}

module.exports = {
    obtenerClima
}