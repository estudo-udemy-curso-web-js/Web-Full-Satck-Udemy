const consumo_automovel = 12;

function gastoCombustivel(tempoGasto, velocidadeMedia){
    const distancia = tempoGasto * velocidadeMedia;
    const ConsumoFinal = distancia / consumo_automovel

    return ConsumoFinal.toFixed(3);
}

console.log(gastoCombustivel(10,85))
console.log(gastoCombustivel(2,92))
console.log(gastoCombustivel(22,67))