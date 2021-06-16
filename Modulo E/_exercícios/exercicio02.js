console.log('Vai começar...')
for (var c = 0; c <=10; c++){
    console.log(`Indice ${c}`)
    valor = c % 2

    if (valor == 0){
        console.log('PAR')
        console.log('--------')
    }else{
        console.log('IMPAR')
        console.log('--------')
    }
}
console.log('FIM')