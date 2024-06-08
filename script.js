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

    let current = screen.textContent

    let ans;




    
    // console.log((OPERATORS.includes(input)))



    //EXECUTE calculation with '=' operator
        if((input == '=') &&
           (numA) &&
           (operator) &&
           (numB)
        ){
            
            //DIVIDE / 0 prevention
            if ((operator == '/') && 
            (numB == 0)
            ){
                alert(`
                    OTŌSAN!??
                    - DIVIDE / 0 not possivle
                    - enter again` )

                numB =  undefined;
                
                return screen.textContent = `enter numbre >0` 
            } 


            ans = operate(numA, operator, numB)

            screen.textContent = ans

            numA = ans;
            numB = undefined;
            operator = undefined;
        } 

    //EXECUTE calculation with '!=' operator
        if((OPERATORS.includes(input)) &&
           (numA) &&
           (operator) &&
           (numB)
        ){

            //DIVIDE / 0 prevention
            if ((operator == '/') && 
            (numB == 0)
            ){
                alert(`
                    OTŌSAN!??
                    - DIVIDE / 0 not possivle
                    - enter again` )

                numB =  undefined;
                
                return screen.textContent = `enter numbre >0` 
            } 


            ans = operate(numA, operator, numB)

            numA = ans;
            operator = btn.textContent;
            numB = undefined;

            screen.textContent = ans
        } else if ((OPERATORS.includes(input) &&
                   (!operator))
                ){
            //console.log('OPERATOR clicked')

            operator = event.target.textContent
            //console.log(Boolean(operator))

            screen.textContent = operator
        }




    //DOT POINT feature
        if(input == '.'){
            //console.log('. DOT CLICKED')


            if(!operator){
                //console.log('numA DOT clicked')

                if(!numA){
                    screen.textContent = '0.'
                    numA = '0.'}

                else if(numA.includes('.')){
                    return alert(`you entered: '${numA}.'
                    mandate: double dots not allowed`)
                }
                else{

                numA += '.'
                screen.textContent = numA
                }

            } else if(operator){
               //console.log('numB DOT clicked')
               
               if(!numB){
                screen.textContent = '0.'
                numB = '0.'

                } else if(operator&&!numB){
                    screen.textContent = '.'

                } else if(numB.includes('.')){
                    return alert(`you entered: '${numB}.' 
                    mandate: double dots not allowed`)

                } else {
                    numB += '.'
                    screen.textContent = numB
                }
              } 
        }
    

    //ASSIGN numA
        if((NUMBERS.includes(input)) &&
           (!operator)
        ){
            //console.log('numA clicked')


            if(ans){
                numA = ans;
            } else if (!numA){
                numA = input
            } else {
                numA += input
            }
            screen.textContent = numA

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
            //console.log('`C` clicked')

            //RESET VARIABLES + SCREEN
            numA = undefined
            numB = undefined
            operator = undefined

            screen.textContent = 0
        } 

    //`Del` calculator input 
        if(input === 'Del'){
         //console.log('`Del` clicked')

         current = screen.textContent

         //DELETE numA or numB end character
         if(current == numB){
             if(numB.length == 1){
                 screen.textContent = '...'
                 numB = undefined;

             } else if (numB.length > 1){
                 numB = numB.slice(0, -1)   
                 screen.textContent = numB
             }
         } else if (current == numA){
            if(numA.length == 1){
                screen.textContent = '...'
                numA = undefined;

            } else if (numA.length > 1){
                numA = numA.slice(0, -1)   
                //.slice(0, -1)  
                // 0 specifies strings FIRST character. 
                // -1 specifies last character.
                // .slice() will slice, and keep everything from First Character `uptill` Last Character     

                screen.textContent = numA
            }
        }
    }



        //debug
        console.log(
        `             - UPDATE - 
        (numA, operator, numB)
        (${numA},${operator},${numB})`)


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

