// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    let dobrar = [];
    for (let i = 0; i < numeros.length ; i ++){
        dobrar.push(numeros[i] * 2);
    }
    return dobrar;
    // Sua implementação aqui
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    let soma = 0;
    for (let i = 0; i< numeros.length; i ++){
        soma +=numeros[i];
    }
    return soma;
    // Sua implementação aqui
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
    // Sua implementação aqui
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};