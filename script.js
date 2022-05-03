// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;
// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.1

let isEqual = (numberOne,NumberTwo) => {
 if(numberOne === NumberTwo)
   return "são iguais"

  return "são diferentes"
}

let isPair = number => {
  if (number === 0)
  return "é Par"
  let result = number / 2;
  if (String(number).includes('.'))
   return "é Impar";
  else
   return "é Par";
};


let firstNumber, secondNumber;

while (isNaN(firstNumber))
  firstNumber = prompt("Por gentileza digite um número");

while (isNaN(secondNumber))
  secondNumber = prompt("Por gentileza digite outro número");

let sum =  Number( firstNumber) + Number(secondNumber);
let sub = firstNumber - secondNumber;
let multi = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
1;
let log = firstNumber % secondNumber;

let ResultMessage = `Os numeros digitados foram ${firstNumber} e ${secondNumber} a conclusão destes números é:
Os dois numeros ${isEqual(firstNumber, secondNumber)} 
A soma equivale a ${sum} e ${ isPair(sum)}
A subtração equivale a ${sub}
A multiplicação equivale a ${multi}
A divisão equivale a ${division}
O resto da divisão equivale a ${log}
`;
alert(ResultMessage)