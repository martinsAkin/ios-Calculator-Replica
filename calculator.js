let firstNumber = 0
let secondNumber = 0
let operator = 0
let display = document.getElementById("display")
let value = document.getElementById('displayNumber')

let figures = document.querySelectorAll('.number')
figures.forEach((figure) =>{
 figure.addEventListener('click', function digits(e){
 
  // firstNumber = e.target.getAttribute('number')
  let number = e.target.getAttribute('number')

  if (!operator) {
   firstNumber = firstNumber? firstNumber + number: number;
  }else{
   secondNumber = secondNumber? secondNumber + number: number;
  }
  
  
 });
 
});

let operationValue = document.querySelectorAll('.operation')
operationValue.forEach(operation => {
 operation.addEventListener('click', function(e){
  operator = e.target.getAttribute('operation')

 })
});

let calculateBtn = document.querySelector('.equals')
calculateBtn.addEventListener("click", function(){
  if (firstNumber && secondNumber && operator) {
   let result = calculate(parseFloat(firstNumber), parseFloat(secondNumber), operator)

   display.innerHTML = `= ${result}`
  value.innerHTML = (parseFloat(firstNumber) + operator + parseFloat(secondNumber))
  }
  
})

function calculate(firstNumber, secondNumber, operator){
   switch (operator){
    case '+':
     return firstNumber + secondNumber;
   case '-':
    return firstNumber - secondNumber;
   case "/":
    if (secondNumber < 1) {
     return "Error"
    }else{
     return firstNumber / secondNumber;
    }
   case "*":
    return firstNumber * secondNumber;
   default:
    return "invalid operation"
   }
   
}

function clearBtn() {
 firstNumber = 0
 secondNumber = 0
 operator = 0
 display.innerHTML = 0
 value.innerHTML = 0
}