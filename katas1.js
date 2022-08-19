
//FUNCAO oneThroughTwenty
function oneThroughTwenty(numero) {
  let contagem = ''
for(let i = 1; i<=numero; i++) {
   contagem +=`${i} `
}
return contagem
}
let  letsCount = oneThroughTwenty(20)
console.log(letsCount)





//FUNCAO evensToTwenty
function evensToTwenty(numero) { 
  let contagemPares = ''
for(let i = 0; i<=numero; i++) { 
  if (i > 0 && i % 2 == 0 ) { 
      contagemPares +=`${i} `
  }
}
return contagemPares
}
let  letsCountTheEvens = evensToTwenty(20)
 console.log(letsCountTheEvens)




//FUNCAO oddsToTwenty
function oddsToTwenty(numero) {
  let contagemImpars = ''
for(let i = 0; i<=numero; i++) { 
  if (i > 0 && i % 2 !== 0 ) { 
    contagemImpars +=`${i} `
  }
}
return contagemImpars
}
let  letsCountTheOdds = oddsToTwenty(20)
console.log(letsCountTheOdds)



 //FUNCAO multiplesOfFive
function multiplesOfFive(numero) {
  let multiplosArmazenados = ''
for(let i = 0; i<=numero; i++) { 
  if (i % 5 == 0 ) { 
    multiplosArmazenados +=`${i} `
  }
}
return multiplosArmazenados
}
let  multiplos5 = multiplesOfFive(100)
console.log(multiplos5)






//FUNCAO squareNumbers
function squareNumbers(numero) {
  let resultNumeros= ''

  for (let i = 1; i<=numero; i++)  {
    if (Math.sqrt(i) % 1 === 0) {
      resultNumeros += `${i} `
    }
    }
  
  return resultNumeros
}
let perfeitos = squareNumbers(100)
console.log(perfeitos)





//FUNCAO countingBackwards
function countingBackwards(numero) {
  let contagemBack = ''
  for(let i = numero; i>0; i--) {
     contagemBack +=`${i} `
  }
  return contagemBack
  }

  let  letsCountBack = countingBackwards(20)
  console.log(letsCountBack)



  

//FUNCAO evenNumbersBackwards
function evenNumbersBackwards(numero) {
  let contagemPares = ''
for(let i = numero; i> 0 ; i--) { 
  if (i > 0 && i % 2 == 0 ) { 
      contagemPares +=`${i} `
  }
}
return contagemPares
}
let  letsCountBackTheEvens = evenNumbersBackwards(20)
 console.log(letsCountBackTheEvens)



//FUNCAO oddNumbersBackwards
function oddNumbersBackwards(numero) {
  
  let contagemImpars = ''
  for(let i = numero; i>0; i--) { 
  if (i % 2 !== 0 ) { 
    contagemImpars +=`${i} `
  }
}
return contagemImpars
}
let  letsCountBackTheOdds = oddNumbersBackwards(20)
console.log(letsCountBackTheOdds)






//FUNCAO multiplesOfFiveBackwards
function multiplesOfFiveBackwards(numero) {

  let multiplosArmazenadosBack = ''
  for(let i = numero; i>0; i--) { 
    if (i % 5 == 0 ) { 
      multiplosArmazenadosBack +=`${i} `
    }
  }
  return multiplosArmazenadosBack
  }
  let  multiplos5Backing = multiplesOfFiveBackwards(100)
 console.log(multiplos5Backing)




function squareNumbersBackwards(numero) {
    
  let resultNumeros= ''

  for (let i = numero; i > 0; i--)  {
    if (Math.sqrt(i) % 1 === 0) {
      resultNumeros += `${i} `
    }
    }
  
  return resultNumeros
}
let perfeitosBacking = squareNumbersBackwards(100)
console.log(perfeitosBacking)

