function sumaPares(arr) {
    return arr.reduce((total, numero) => {
      if (numero % 2 === 0) {
        return total + numero;
      }
      return total;
    }, 0);
  }
  
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumaPares(numeros)); 
  