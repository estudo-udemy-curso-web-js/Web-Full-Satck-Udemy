const idadeMendes = 20;
const idadePrimo = 19;
const idadeAlice = 18;

const idades = [20, 19, 18, 24, 12, 14, 'Nome', 73, 42, 81];   //sempre começe a contar de 0 até o numero desejado

console.log('O Resultado é:', idades[2]);


// Como saber quantos objetos existem em um array:


console.log('O Resultado é:', idades.length);


// Utilizando For:


for(let i = 0; i < idades.length; i ++){
 console.log('O Resutlado do Array é:', idades[i])
}


/*
i = 0, ou seja a variavel i = 0,
enquanto i for menor que idades.length / idades.length = quantidade de itens dentro do array, ([20, 19, 18, 20, 19, 18, 20, 19, 18, 20])
enquanto i for menor que 10 ele executara o codigo. */
