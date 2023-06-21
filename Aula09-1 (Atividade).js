function calcularLitrosViagem(tempo, velocidadeMedia) {
    const consumoMedio = 12;
    const distancia = tempo * velocidadeMedia;
    const litrosNecessarios = distancia / consumoMedio;
    
    return litrosNecessarios.toFixed(3);
  }
  
  const tempoViagem = 5; 
  const velocidadeMedia = 60;
  
  const litrosGastos = calcularLitrosViagem(tempoViagem, velocidadeMedia);
  
  console.log(litrosGastos);
  