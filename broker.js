var mosca = require('mosca')
var settings = {port: 1883}
var broker = new mosca.Server(settings)

broker.on('ready', ()=>{
    console.log('Broker está pronto!')
})

broker.on('published', (packet)=>{
    message = packet.payload.toString()
    console.log(message)
})