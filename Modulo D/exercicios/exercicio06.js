//Exercicio do Bom Dia

var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são ${horas} horas.`)

if (horas >=0 && horas < 6){
    console.log('Boa madrugada!')
}else if (horas >= 6 && horas < 12){
    console.log('Bom dia!')
}else if (horas >=12 && horas < 18) {
    console.log('Boa tarde!')
}else if(horas >=18 && horas < 24){
    console.log('Boa noite!')
}else{
    console.log('Horário não encontrado')
}