var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic = 'maquinadelavar123'
var message = "Sua lavagem acabou, pode retirar suas roupas :) "
var status=1;
var time = 60000; 

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    if (status == 1){
      while (time != 0){
        time = time - 6000;
      }
      if (time == 0){
        status = 0;
        if (status == 0){
            client.publish(topic, message)
            console.log('Mensagem enviada', message)
        }
      }
    }else{}
  })        




/*var status;
var time; 
time = 600000;
status = prompt("Sua lavadora está ligada?");
if (status == 1){
    while (time != 0){
      time = time - 60000;
    }
    if (time == 0){
    status = 0;
  }
  if (status == 0){
    console.log ("Sua lavagem acabou, pode retirar suas roupas :D");
    
  }
  }else{
  }*/

