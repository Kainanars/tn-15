var idade

idade = [18 , 12 , 15 , 14 , 13 , 10];

var crianca = [];

var adolescente = [];

var adulto = [];

for (var i=0 ; i<idade.length; i++) {
    if (idade[i] <=10){
        crianca.push(idade[i]);
        console.log("É uma criança")
    }
    else if ((idade[i]>=11) && (idade[i]<=17)){
        adolescente.push(idade[i]);
        console.log("É um adolescente")
    }
    else if (idade[i]>=18){
        adulto.push(idade[i]);
        console.log("É um adulto")
    }
}



