const prompt = require('prompt-sync')();
let base = Number(prompt("Digite a base "));
let expoente = Number(prompt("Digite o expoente "));
let resultado;

if(expoente > 0){
    resultado = base;
} else{
    resultado = 1;
}


for(let c=2;c<=expoente;c++){
    let valor = resultado;
    for(let j=2; j<=base; j++){
        resultado += valor;
    }      
}

console.log(`${base} elevado à ${expoente}ª potência é ${resultado}.`);