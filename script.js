// missino statement
console.log('~ final hours. make it count. ~') 
// missino statement



//SELECT calculator display screen
const screen = document.querySelector('.calculator-screen-text')

//SELECT ALL buttons. then convert NodeList to Array
const btnsNodeList = document.querySelectorAll('button')
const btns = Array.from(btnsNodeList);



//VARIABLES DECLARATION
let numA;
let numB;
let operator;

const OPERATORS = '+-*/%'
const NUMBERS = '1234567890' 



//REGISTER EVENT LISTENER for buttons. listen for 'CLICK'  
btns.forEach((btn)=>btn.addEventListener('click', (event)=>{

    //debug
    // console.log(operator)
    // console.log(numA)
    // console.log(numB)


    let input = btn.textContent


        //EXECUTE calculation
        if((input == '=') &&
           (numA) &&
           (operator) &&
           (numB)
        ){
            let ans = operate(numA, operator, numB)
            
            screen.textContent = ans

            numA = ans;
            numB = undefined;
            operator = undefined;
        } 


        //ASSIGN numA
        if((NUMBERS.includes(input)) &&
           (!operator)
        ){
            //console.log('numA clicked')

            if (!numA){
                numA = input
            } else {
                numA += input
            }
            
            screen.textContent = numA
        }

        //ASSIGN operator
        if(OPERATORS.includes(input)){
            //console.log('OPERATOR clicked')

            operator = event.target.textContent
            //console.log(Boolean(operator))

            screen.textContent = operator
        }


        //ASSIGN numB 
        if((NUMBERS.includes(input)) &&
           (operator))
            {
            //console.log('numB clicked')

            if (!numB){
                numB = input
            } else {
                numB += input
            }
            
            screen.textContent = numB
        }


        //RESET calculator
        if(input === 'C'){
            console.log('`C` clicked')

            numA = undefined
            numB = undefined
            operator = undefined

            screen.textContent = 0
        } 

        //`Del` calculator input 
        if(input === 'Del'){
         console.log('`Del` clicked')

         numA = undefined
         numB = undefined
         operator = undefined

         screen.textContent = 0
     } 


        //debug
        console.log(
        ` ~ UPDATE DETECTED ~ 
        THE VARIABLES = (numA, operator, numB)
        CURRENT STATUS = (${numA},${operator},${numB})`)


    })
)





// FUNCTIONS DECLARATION for calculator operations
function operate(num1, operator, num2){
    if (operator == '+') return add(num1, num2) 
    if (operator == '-') return subtract(num1, num2) 
    if (operator == '*') return multiply(num1, num2) 
    if (operator == '/') return divide(num1, num2) 
}


function add(num1, num2){
    total = +num1 + +num2    
    return total 
}


function subtract(num1, num2){
    total = num1 - num2
    return total 
}

function multiply(num1, num2){
    total = num1 * num2
    return total 
}


function divide(num1, num2){
    total = num1/num2
    return total 
}

