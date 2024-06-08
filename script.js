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
const OTHER = '=.CEnterDelete'


/*
//REGISTER EVENT LISTENER for buttons. listen for 'CLICK'  
btns.forEach((btn)=>btn.addEventListener('click', (event)=>{

    //debug
    // console.log(operator)
    // console.log(numA)
    // console.log(numB)


    let input = btn.textContent
    
    let ans;




    //launch calculation
    if(((input == '=')||(OPERATORS.includes(input))) &&
       ((numA) && (numB) && (operator))
    ){ 
        //if divide by 0, prevent launch
        if ((operator == '/')&&(numB == 0)){
            alert(`${numA} divide by ${numB} ?

            OTŌSAN!??
            - DIVIDE / 0 not possivle
            - enter again` )

            screen.textContent = `${numA} ${operator} ...`
        
            return numB =  undefined; 
        }

        //get answer
        ans = startOperation(numA, operator, numB, input)

        //transfer answer to numA. reset numB 
        numA = ans;
        numB = undefined;

        //reset operator 
        if (!(input == '=')) {
            operator = btn.textContent
        } else {
            operator = undefined;
        }
    }


        
    //SET operator
    if ((OPERATORS.includes(input) &&
        (!operator))
    ){
        //console.log('OPERATOR clicked')

        operator = event.target.textContent
        //console.log(Boolean(operator))

        screen.textContent = operator
    }




    //enable DOT POINT usage
    if (input == '.'){
        if(!operator){
            numA = controlDotPoint(numA)
        } else if (operator){
            numB = controlDotPoint(numB)
        }
    }



    //SET each OPERAND
    if(NUMBERS.includes(input)){
        if((!operator)&&(ans)){
            numA = ans;

        } else if (!operator){
            numA = setOperand(numA, operator, ans, input)
             
        } else if (operator){
            numB = setOperand(numB, operator, ans, input)
        }
    } 


    //enable Del function 
    if(input === 'Del'){
        let currentScreen = screen.textContent
        if(numA == ans){
            console.log("we're in")
            return;
        } else if (numA == currentScreen){
            numA = undoScreen(numA, currentScreen)
        }
        else if(numB == currentScreen){
            numB = undoScreen(numB, currentScreen)
        }
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



        //debug
        console.log(
        `             - UPDATE - 
        (numA, operator, numB)
        (${numA},${operator},${numB})`)


    })
)



*/



//FUNCTIONs

// SEND DATA TO OPERATE
function startOperation(numA, operator, numB, input){
    // console.log('inside function')
    // console.log(input)


    
    ans = operate(numA, operator, numB)

    screen.textContent = ans

    return ans
}


// PREVENT DOUBLE DOT POINTS
function controlDotPoint(num){
    if(!num){
        screen.textContent = '0.'
        return num = '0.'

    } else if(num.includes('.')){
        alert(`you entered: '${num}.'
        mandate: double dots not allowed`)
        return num

    } else {
        console.log('we in')
        num += '.'
        screen.textContent = num
        return num
    }
}



// SET OPERANDS
function setOperand(num, operator, ans, input){
    if (!num){
        num = input
    } else {
        num += input
    }

    screen.textContent = num
    
    return num
}


// UNDO feature
function undoScreen(num){
    if(num.length == 1){
        screen.textContent = '...'
        num = undefined;
        return num;

    } else if (num.length > 1){
        num = num.slice(0, -1)   
        screen.textContent = num
    
        return num
    }
}











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




//DEBUG
/*
document.addEventListener('keypress', (event)=>{
    let input = event.key 
    console.log(`(event.key, input  = ${event.key}, ${input}`)
    
    console.log(`(OPERATORS, NUMBERS, OTHER = ${(OPERATORS.includes(input))}, ${(NUMBERS.includes(input))}, ${OTHER.includes(input)}`)

    if((OPERATORS.includes(input))||(NUMBERS.includes(input))||(OTHER.includes(input)))
        {console.log("CORRECT")} else{
            console.log('WRONG')
        }
})

*/





//EVENT LISTENER FOR BOTH KEY & CLICK
btns.forEach((btn)=>btn.addEventListener('click', operationEVERLASTING));



document.addEventListener('keypress', operationEVERLASTING);


function operationEVERLASTING(event){

    //debug
    // console.log(operator)
    // console.log(numA)
    // console.log(numB)


    //console.log(event)
    let input;

    if(event.type == 'keypress'){
        
        input = event.key

        //debug
        console.log(`(event.key, input  = ${event.key}, ${input}`)
        console.log(`(OPERATORS, NUMBERS, OTHER = ${(OPERATORS.includes(input))}, ${(NUMBERS.includes(input))}, ${OTHER.includes(input)}`)
        
        
        if((OPERATORS.includes(input))||(NUMBERS.includes(input))||(OTHER.includes(input)))
            {console.log("CORRECT")} else{
                console.log('WRONG');
                return; 
            }

                    
        if(input == 'Enter'){input = '='}
        if(input == 'Delete'){input = 'Del'}


    } else if (event.type == 'click'){
        //console.table(event.target)
        input = event.target.textContent
        console.log(input)
    }
    
    // console.log(input)
    
    let ans;




    //launch calculation
    if(((input == '=')||(OPERATORS.includes(input))) &&
       ((numA) && (numB) && (operator))
    ){ 
        //if divide by 0, prevent launch
        if ((operator == '/')&&(numB == 0)){
            alert(`${numA} divide by ${numB} ?

            OTŌSAN!??
            - DIVIDE / 0 not possivle
            - enter again` )

            screen.textContent = `${numA} ${operator} ...`
        
            return numB =  undefined; 
        }

        //get answer
        ans = startOperation(numA, operator, numB, input)

        //transfer answer to numA. reset numB 
        numA = ans;
        numB = undefined;

        //reset operator 
        if (!(input == '=')) {
            if(event.type == 'click'){
                operator = event.target.textContent
            } else if (event.type == 'keypress'){
                operator = event.key
            }
        } else {
            operator = undefined;
        }
    }


        
    //SET operator
    if ((OPERATORS.includes(input) &&
        (!operator))
    ){
        //console.log('OPERATOR clicked')

        if(event.type == 'click'){
            operator = event.target.textContent
        } else if (event.type == 'keypress'){
            operator = event.key
        }
        //console.log(Boolean(operator))

        screen.textContent = operator
    }




    //enable DOT POINT usage
    if (input == '.'){
        if(!operator){
            numA = controlDotPoint(numA)
        } else if (operator){
            numB = controlDotPoint(numB)
        }
    }



    //SET each OPERAND
    if(NUMBERS.includes(input)){
        if((!operator)&&(ans)){
            numA = ans;

        } else if (!operator){
            numA = setOperand(numA, operator, ans, input)
             
        } else if (operator){
            numB = setOperand(numB, operator, ans, input)
        }
    } 


    //enable Del function 
    if(input === 'Del'){
        let currentScreen = screen.textContent
        if(numA == ans){
            console.log("we're in")
            return;
        } else if (numA == currentScreen){
            numA = undoScreen(numA, currentScreen)
        }
        else if(numB == currentScreen){
            numB = undoScreen(numB, currentScreen)
        }
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



        //debug
        console.log(
        `             - UPDATE - 
        (numA, operator, numB)
        (${numA},${operator},${numB})`)


    }
    