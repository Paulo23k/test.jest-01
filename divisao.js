function divisao(a, b) {
    if (b === 0) {
      return 'Divisão por zero';
    }
    return a / b;
  }
  
  module.exports = divisao;