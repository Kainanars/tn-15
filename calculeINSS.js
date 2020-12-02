function calculeINSS (salario){
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,      
        maximumFractionDigits: 2,
     });

    if (salario <= 1045.00){
        const valorINSS = salario * 0.075;
        const aliquota = (valorINSS / salario) * 100;
        console.log(`Sálario: ${salario}, Aliquota: ${formatter.format(aliquota)}, Valor INSS: ${formatter.format(valorINSS)}`);
        return;
    }
    else if (salario >= 1045.01 <= 2089.60){
        const valorINSS = ((salario - 1045.00) * 0.09) + 78.37;
        const aliquota = (valorINSS / salario) * 100;
        console.log(`Sálario: ${salario}, Aliquota: ${formatter.format(aliquota)}, Valor INSS: ${formatter.format(valorINSS)}`);
        return;
    }
    else if (salario >= 2089.61 <= 3134.40){
        const valorINSS = ((salario - 2089.60) * 0.12) + 172.38;
        const aliquota = (valorINSS / salario) * 100;
        console.log(`Sálario: ${salario}, Aliquota: ${formatter.format(aliquota)}, Valor INSS: ${formatter.format(valorINSS)}`);
        return;
    }
    else {
        const valorINSS = ((salario - 3134.40) * 0.14) + 297.75;
        const aliquota = (valorINSS / salario) * 100;
        console.log(`Sálario: ${salario}, Aliquota: ${formatter.format(aliquota)}, Valor INSS: ${formatter.format(valorINSS)}`);
        return;
    }
}

calculeINSS(1200);