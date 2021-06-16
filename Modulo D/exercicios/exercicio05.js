//Exercicio para Votar

var idade = 72

if (idade < 16){
    console.log('Você nao pode votar')
}else if (idade < 18 || idade > 65){
    console.log('Você tem a opção de votar')
}else{
    console.log('Você é obrigado a votar')
}