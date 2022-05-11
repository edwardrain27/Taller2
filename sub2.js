const mqtt = require('mqtt');

const options = {
    clean:false,
    clientId: 'pablito_test',
    username: 'pablito_test',
    password: 'pablito_test'
}

/**
 * Función encargada de conectar a un servidor de mosquito
 * @param {*} url 
 * @param {*} options 
 * @returns 
 */
const url = 'mqtt://127.0.0.1:6000'

const client = mqtt.connect(url,options);

client.on('connect', function(){
    console.log('Connected')
    client.subscribe('topico2', function(err){
        if(!err){
            console.log(`${client.options.clientId} conectado`)
        }
    })
})

client.on('message', function(topic, message){
    console.log(`Topico: ${topic.toString()}`);
    console.log(`Mensaje: ${message.toString()}`);
})