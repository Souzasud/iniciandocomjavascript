// 1. Mensagem no alert
const mensage = 'Hello World!'

alert(mensage)

// 2. Script de soma

let firstNumber = prompt ('SCRIPT DE SOMA' + '\n' + '\n' + 'Digite o primeiro número:')
let secondNumber = prompt('SCRIPT DE SOMA' + '\n' + '\n' + 'Digite o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber

alert('A soma dos dois números é: ' + sum)

// 3. Declarando se é número

const valor = prompt('DECLARANDO SE É NÚMERO' + '\n' + '\n' + 'Digite algo!')
if (Number(valor)) {
  alert("Você digitou um número: " + `${valor}`)
} else {
  alert("Não é um número!")
}

// 4. Declarando se é string

const value = prompt('DECLARANDO SE É STRING' + '\n' + '\n' + 'Digite um valor')
if (Number(value)) {
  alert("Não é uma String")
} else {
    alert("É uma String")
}

// 5. Declarando se é booleano 

const ifBol = prompt('DECLARANDO SE É BOOLEANO' + '\n' + '\n' + 'Digite algo!')
if(ifBol === 'true' || ifBol === 'false') {

  alert('É um boleano!')
}else{
  alert('Não é um boleano!')
}

// 6. Script de subtração

const firstNumberSub = prompt('SCRIPT DE SUBTRAÇÃO' + '\n' + '\n' + 'Digite o primeiro número:')
const secondNumberSub = prompt('SCRIPT DE SUBTRAÇÃO' + '\n' + '\n' + 'Digite o segundo número:')

sub = firstNumberSub - secondNumberSub

if(isNaN(sub)) {
  alert('Digite apenas números!')
}else{
  alert('O resultado da subtração é: ' + `${sub}`)
}

// 7. Script de multiplicação

const firstNumberMult = prompt("SCRIPT DE MULTIPLICAÇÃO" + '\n'+ '\n' + "Digite o primeiro número:");
  
const secondNumberMult = prompt("SCRIPT DE MULTIPLICAÇÃO" + '\n' + '\n' + "Digite o segundo número:");

mult = firstNumberMult * secondNumberMult

if(isNaN(mult)) {
  alert('Digite apenas números!')
}else{ 
    alert('O resultado da multiplicação é: ' + `${mult}`)
}

// 8. Script de divisão

const firstNumberDiv = prompt('SCRIPT DE DIVISÃO' + '\n' + '\n' + 'Digite o primeiro número:')

const secondNumberDiv = prompt('SCRIPT DE DIVISÃO' + '\n' + '\n' + 'Digite o segundo número:')

div = firstNumberDiv / secondNumberDiv
if(isNaN(div)) {
  alert('Digite apenas números!')
}else{
  alert('O resultado da divisão é: ' + `${div}`)
}

// Script de par

const par = prompt('SCRIPT DE PAR?' + '\n' + '\n' + 'Digite um número:')

if (par % 2 === 0) {
        alert(`Número ${par}. Este numero é Par`)
      } else {
        alert(`Número ${par}. Não é um número par`)
      }

// Script de impar      

const impar = prompt('SCRIPT DE IMPAR?' + '\n' + '\n' + 'Digite um número:')

if (impar % 2 === 0) {
        alert(`Número ${impar}. Não é um número Impar`)
      } else {
        alert(`Número ${impar}. Este numero é Impar`)
      }
