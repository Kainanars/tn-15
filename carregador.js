function carregador(bateriaAtual)
    {
    let bateriaEmFalta = 100 - bateriaAtual;
    let tempoDeCarga = bateriaEmFalta * 72;
    let tempoDeCargaMinutos = tempoDeCarga / 60;

    function calculoHoras()
        {
        let horas = tempoDeCargaMinutos / 60
        let minutos = tempoDeCargaMinutos % 60;
        let relogio = `${Math.trunc(horas)}:${minutos}`
        return relogio
        }
    
    return console.log(`     Carregando ${bateriaAtual}%
${(calculoHoras(tempoDeCargaMinutos))} até a carga total!`)

    }

carregador(20)


		
