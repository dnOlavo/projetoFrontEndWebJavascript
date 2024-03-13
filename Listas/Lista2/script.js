window.addEventListener("load", function () {
// Idades das pessoas armazenadas em um vetor
const idades = [13, 16, 26, 29, 40, 53, 61];

const mostrarResultado = resultado => {
    const divRespostas = document.getElementById('respostas');
    const paragrafo = document.createElement('p');
    paragrafo.textContent = resultado;
    divRespostas.appendChild(paragrafo);
};

// a) A soma das idades
const somaIdades = idades.reduce((total, idade) => total + idade, 0);
mostrarResultado(`a) A soma das idades é: ${somaIdades}`);

// b) A média aritmética simples das idades
const mediaAritmetica = somaIdades / idades.length;
mostrarResultado(`b) A média aritmética das idades é: ${mediaAritmetica}`);

// c) A maior idade
const maiorIdade = Math.max(...idades);
mostrarResultado(`c) A maior idade é: ${maiorIdade}`);

// d) As idades ímpares
const idadesImpares = idades.filter(idade => idade % 2 !== 0);
mostrarResultado(`d) As idades ímpares são: ${idadesImpares.join(', ')}`);

// e) Verificar se todos são maiores de idade (idade >= 18)
const maioresDeIdade = idades.every(idade => idade >= 18);
mostrarResultado(`e) Todos são maiores de idade? (idade >= 18): ${maioresDeIdade}`);

// f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
const valorF = parseInt(prompt("Digite um valor para verificar se todas as idades são maiores ou iguais a ele:"));
const maiorIgual = idades.every(idade => idade >= valorF);
mostrarResultado(`f) Todas as idades são maiores ou iguais a ${valorF}?: ${maiorIgual}`);

// g) Exibir todas as idades maiores ou iguais a determinada idade
const limiteG = parseInt(prompt("Digite uma idade para exibir todas as idades maiores ou iguais a ela:"));
const maiorLimite = idades.filter(idade => idade >= limiteG);
mostrarResultado(`g) Idades maiores ou iguais a ${limiteG}: ${maiorLimite.join(', ')}`);

// h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
const limiteH = parseInt(prompt("Digite uma idade para calcular a média das idades das pessoas com idades maiores ou iguais a ela:"));
const maiorLimiteH = idades.filter(idade => idade >= limiteH);
const mediaMaiorLimiteH = maiorLimiteH.reduce((total, idade) => total + idade, 0) / maiorLimiteH.length;
mostrarResultado(`h) A média das idades das pessoas com idade maior ou igual a ${limiteH} é: ${mediaMaiorLimiteH}`);
});