// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  let soma = 0;
  for(let i = 1; i<= n; i++){
    soma += i;
  }
  return soma;
  // Sua implementação aqui
}

// Verifica se um número é par
function ehPar(number) {

  if (number % 2 ===0){
    return true;
  }else{
    return false;
  }
  // Sua implementação aqui
}

function fibonacci(n) {

  if (n <= 1){
    return n;
  }else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  // Sua implementação aqui
}

module.exports = { somaNumeros, ehPar, fibonacci };