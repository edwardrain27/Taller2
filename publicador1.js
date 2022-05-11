
const mqtt = require('mqtt');

const options = {
    clean:false,
    clientId: 'eduardito',
    username: 'eduardito',
    password: 'eduardito'
}

/**
 * Función encargada de conectar a un servidor de mosquito
 * @param {*} url 
 * @param {*} options 
 * @returns 
 */
const url = 'mqtt://127.0.0.1:6000'

const client = mqtt.connect(url,options);

client.publish('topico1', 'Hola a todos los del topico1',function(){
    console.log(`Soy un publicador`)
})