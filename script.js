console.log('~ final hours. make it count. ~') 



//select display screen
const screen = document.querySelector('.calculator-screen-text')


//select all btns. then convert nodelist to array
const btnsNodeList = document.querySelectorAll('button')
const btns = Array.from(btnsNodeList);


//setup btn 'click' event listener 

btns.forEach((btn)=>btn.addEventListener('click', (event)=>{

    console.log(operator)

    let input = btn.textContent

        if(input == '='){
            let ans = operate(numA, operator, numB)
            return screen.textContent = ans
        }



        if((!OPERATORS.includes(input)) &&
           (!operator)
        ){
            console.log('numA clicked')

            if (!numA){
                numA = input
            } else {
                numA += input
            }
            
            screen.textContent = numA
        }


        if(OPERATORS.includes(input)){

            console.log('OPERATOR clicked')

            operator = event.target.textContent
            console.log(Boolean(operator))

            screen.textContent = operator
        }

        if((!OPERATORS.includes(input)) &&
           (operator))
            {
            console.log('numB clicked')

            if (!numB){
                numB = input
            } else {
                numB += input
            }
            
            screen.textContent = numB
        }







        console.log(`${numA} - this is numA`)
        console.log(`(${numA},${operator}) - this is (numA, operator)`)
        console.log(`(${numA},${operator},${numB}) - this is (numA, operator, numB)`)
        // else {
        //     screen.textContent = input
        //     num1 = input
        // }


        if((input === 'C') ||
           (input === 'Del')
          ){
            console.log('ORANGE MAN clicked')

            numA = undefined
            numB = undefined
            operator = undefined

            return screen.textContent = 0
        } 
    })
)




let numA;
let numB;
let operator;


const OPERATORS = '+-*/%'








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

