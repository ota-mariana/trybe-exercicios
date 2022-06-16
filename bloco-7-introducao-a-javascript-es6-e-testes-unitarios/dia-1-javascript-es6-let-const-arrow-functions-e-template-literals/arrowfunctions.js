// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

  // Exercício 1 - parte 1. Modificando a estrutura da função para arrow function.
  const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
      } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
      }
  }

  testingScope(true);

  // Exercício 2 - parte 1. Criar uma função que retorne um array em ordem crescente.
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const ordenaArray = (oddsAndEvens) => ordenaArray.sort(oddsAndEvens);

  console.log(ordenaArray); // será necessário alterar essa linha 😉