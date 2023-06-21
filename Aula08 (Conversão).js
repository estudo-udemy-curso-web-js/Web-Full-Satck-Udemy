const salario = 205.7;

// Representa o numero sem decimais:
console.log("O Salario é: ", salario);


// Representa o numero com a quantiade de decimais definidas (2):
const salario2 = 304.967863213;

console.log("O Salario é: ", salario2.toFixed(2));



// Conversão de String para Numero:
const salario3 = '103';

console.log('O Salario (String) é: ', salario3);
console.log('O Salario (Numero) é: ', Number(salario3).toFixed(2));

// Number transforma uma string em numero