function ageVerifyc (nome, idade){

var crianca = [];

var adolescente = [];

var adulto = [];

    if (idade <=10){
        console.log(nome + " é uma criança! Pois tem " + idade + " anos.");
    }
    else if ((idade>=11) && (idade<=17)){
        console.log(nome + " é um adolescente! Pois tem " + idade + " anos.");
    }
    else if (idade>=18){
        console.log(nome + " é um adulto! Pois tem " + idade + " anos.");
    }
}

ageVerifyc("Kainan Rodrigues", 18)

