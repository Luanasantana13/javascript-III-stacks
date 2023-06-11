// Converte uma string para um número inteiro
function convertToInt(string) {
    let numeroInteiro = parseInt(string);
    return numeroInteiro;
    // Sua implementação aqui
}

// Converte um número inteiro para uma string
function convertToString(number) {
    let numberString = number.toString();
    return numberString;
    // Sua implementação aqui
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    return Boolean(value);
    // Sua implementação aqui
}

module.exports = { convertToInt, convertToString, convertToBoolean };