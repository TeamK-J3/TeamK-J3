/*----------------------------------------@Tunrayo-----------------------------------*/



//Calculator framework



/*---------------------------------------------------------------------------------*/



/*----------------------------------@Naomity----------------------------------------*/




/*--------------------------------@Chux----------------------------------------------*/

// Define and select elements
const input_element = document.querySelector('.input');
const output_operation_element = document.querySelector('.operation .value');
const output_result_element = document.querySelector('.result .value');


//some variables

const OPERATORS = ["+", "-", "/", "*"];
const POWER = "POWER(", FACTORIAL = "FACTORIAL";
let data = {
    operation: [],
    formula: [] 
}
let ans = 0;



// CALCULATOR BUTTONS
let calculator_buttons = [
    {
        name : "rad",
        symbol : "Rad",
        formula : false,
        type : "key"
    },
    {
        name : "deg",
        symbol : "Deg",
        formula : false,
        type : "key"
    },
    {
        name : "factorial",
        symbol : "x!",
        formula : FACTORIAL,  // define factorial function
        type : "math_function"
    },
    {
        name : "open-parenthesis",
        symbol : "(",
        formula : "(",
        type : "number"
    },
    {
        name : "close-parenthesis",
        symbol : ")",
        formula : ")",
        type : "number"
    },
    {
        name : "percentage",
        symbol : "%",
        formula : "/100",
        type : "number"
    },
    {
        name : "clear",
        symbol : "AC",
        formula : false,
        type : "key"
    },
    {
        name : "inverse",
        symbol : "inv",
        formula : "Math.inv",// define multiplicative inverse function
        type : "math_function"
    },
    {
        name : "sin",
        symbol : "sin",
        formula : "trigo(Math.sin,",
        type : "trigo_function"
    },
    {
        name : "ln",
        symbol : "ln",
        formula : "Math.log",
        type : "math_function"
    },
    {
        name : "asin",
        symbol : "asin",
        formula : "inv_trigo(Math.asin,",
        type : "trigo_function"
    },
    {
        name : "acos",
        symbol : "acos",
        formula : "inv_trigo(Math.acos,",
        type : "trigo_function"
    },
    {
        name : "atan",
        symbol : "atan",
        formula : "inv_trigo(Math.atan,",
        type : "trigo_function"
    },
    {
        name : "delet",
        symbol : "⌫",
        formula : false,
        type : "key"
    },
    {
        name : "pi",
        symbol : "π",
        formula : "Math.PI",
        type : "number"
    },
    {
        name : "cos",
        symbol : "cos",
        formula : "trigo(Math.cos,",
        type : "trigo_function"
    },
    {
        name : "log",
        symbol : "log",
        formula : "Math.log10",
        type : "math_function"
    },
    {
        name : "seven",
        symbol : 7,
        formula : 7,
        type : "number"
    },
    {
        name : "eight",
        symbol : 8,
        formula : 8,
        type : "number"
    },
    {
        name : "nine",
        symbol : 9,
        formula : 9,
        type : "number"
    },
    {
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },
    {
        name : "e",
        symbol : "e",
        formula : "Math.exp",
        type : "math_function"
    },
    {
        name : "tan",
        symbol : "tan",
        formula : "trigo(Math.tan,",
        type : "trigo_function"
    },
    {
        name : "square-root",
        symbol : "√",
        formula : "Math.sqrt",
        type : "math_function"
    },
    {
        name : "four",
        symbol : 4,
        formula : 4,
        type : "number"
    },
    {
        name : "five",
        symbol : 5,
        formula : 5,
        type : "number"
    },
    {
        name : "six",
        symbol : 6,
        formula : 6,
        type : "number"
    },
    {
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },
    
    {
        name : "square",
        symbol : "x²",
        formula : POWER,
        type : "math_function"
    },
    {
        name : "power",
        symbol : "x<span>y</span>",
        formula : POWER, // define power function
        type : "math_function"
    },
    {
        name : "cube-root",
        symbol : "3√",
        formula : "Math.cbrt",
        type: "math_function"
    },
    {
        name : "one",
        symbol : 1,
        formula : 1,
        type : "number"
    },
    {
        name : "two",
        symbol : 2,
        formula : 2,
        type : "number"
    },
    {
        name : "three",
        symbol : 3,
        formula : 3,
        type : "number"
    },
    {
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },
    {
        name : "ANS",
        symbol : "ANS",
        formula : "ans",
        type : "number"
    },
    {
        name : "exp",
        symbol : "exp",
        formula : "Math.exp",
        type : "math_function"
    },
  
    {
        name : "zero",
        symbol : 0,
        formula : 0,
        type : "number"
    },
    {
        name : "dot",
        symbol : ".",
        formula : ".",
        type : "number"
    },
    {
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },
    {
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    }
];
// Create the calculator buttons
function createCalcButtons() {
    const btns_per_row = 7;
    let added_btns = 0;

    calculator_buttons.forEach( button => {
        // this is to ensure that only 7 buttons are placed on each row
        if (added_btns % btns_per_row == 0) {
            input_element.innerHTML += `<div class="row"></div>`;
        }

        // this ensures that the buttons are not placed on the same row each loop
        const row = document.querySelector('.row:last-child');
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;

        added_btns++;
    })
};

createCalcButtons();




/*---------------------------------------------------------------------------*/
//ADD EVENT LISTENER

input_element.addEventListener('click', event => {
    const target_btn = event.target;

    calculator_buttons.forEach(button => {
        if (button.name == target_btn.id) calculator(button);
    })
})



/*------------------------------------------------------------------------------------*/

/*-----------------------------------@Acel--------------------------------------*/


//Radian to degree function
let RADIAN = true;

const red_btn = document.getElementById("rad");
const deg_btn = document.getElementById("deg");

red_btn.classList.add('active-state');

function angleToggler() {
    red_btn.classList.toggle("active-state");
    deg_btn. classList.toggle("active-state");
}

function raddeg(ggg){
    var degg = ggg* Math.PI / 180;
    return degg;
}

// Convert the result of asin,acos &atan from radian to degree
function inv_trigo(funcc, numb){
    let inv_ = (funcc(numb))*(180/3.1415926535897);
    return inv_;
}

//Calculator Function

function calculator(button){
    if(button.type == "operator"){
       data.operation.push(button.symbol);
       data.formula.push(button.formula);
    }else if (button.type == "number"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }else if (button.type == "trigo_function"){
        data.operation.push(button.symbol +"(");
        data.formula.push(button.formula);
    }else if (button.type == "math_function"){
        let symbol, formula;

        if(button.name == "factorial"){
            symbol = "!"
            formula = button.formula;

            data.operation.push(symbol);
            data.formula.push(formula);
        }else if(button.name == "power"){
            symbol = "^("
            formula = button.formula;

            data.operation.push(symbol);
            data.formula.push(formula);
        }else if(button.name == "square"){
            symbol = "^(";
            formula = button.formula;

            data.operation.push(symbol);
            data.formula.push(formula);

            data.operation.push("2)");
            data.formula.push("2)");
        } else {
            symbol = button.symbol + "(";
            formula = button.formula + "(";
            data.operation.push(symbol);
            data.formula.push(formula);
        }
        }else if (button.type == "key"){
        if(button.name == 'clear'){
            data.operation = [];
            data.formula = [];
            updateOutputResult(0);
        }else if(button.name == 'delet'){
            data.operation.pop();
            data.formula.pop();
        }
        else if (button.name == "rad") {
            RADIAN = true;
            angleToggler();
        
        } else if (button.name == "deg") {
            RADIAN = false;
            angleToggler();
        }
    }else if (button.type == "calculate"){
       formula_str = data.formula.join('');

          //Search
       let POWER_SEARCH_RESULT = search(data.formula, POWER);
       let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL);
         
       //power base

       const BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT);
       BASES.forEach( base => {
           let toReplace = base + POWER;
           let replacement = "Math.pow(" + base + ",";

           formula_str = formula_str.replace(toReplace, replacement);
       })




       //FACTORIAL BASES AND REPLACING WITH THE RIGHT FACTORIAL
       const FACTORIAL_NUMBERS = factorialNumberGetter(data.formula, FACTORIAL_SEARCH_RESULT);
        
       FACTORIAL_NUMBERS.forEach(factorial => {
             formula_str = formula_str.replace(factorial.toReplace, factorial.replacement);
         })
//trow error
       let result;
          try{
              result = eval(formula_str);
          }catch(error){
              if (error instanceof SyntaxError){
              result = "Syntax Error!"
              updateOutputResult(result);
              return;
          }
        }
          //Save result for after use of calculation

          ans = result;
          data.operation = [result]
          data.formula = [result] ;
       updateOutputResult(result);
       return;

    }
      updateOutputOperation(data.operation.join(''));
}
//Power base getter

function powerBaseGetter(formula, POWER_SEARCH_RESULT){
    let powers_bases = [];  //baseses are save here
    
    POWER_SEARCH_RESULT.forEach( power_index => {
        let base = [];  //currrent base

        let parentheses_count = 0;
        let previous_index = power_index - 1;

        while(previous_index >= 0){
            if(formula[previous_index] == "(" ) parentheses_count--;
            if(formula[previous_index] == ")" ) parentheses_count++;

            let is_operator = false;
            OPERATORS.forEach(OPERATOR => {
                if(formula[previous_index] == OPERATOR) is_operator = true;
            })

            let is_power = formula[previous_index] == POWER;

            if( (is_operator && parentheses_count == 0) || is_power) break;
            base.unshift(formula[previous_index] );
            previous_index--;
        }
        powers_bases.push( base.join(''));
    })
   return powers_bases;
}

/*-------------------------------------------------------------------------------------*/

/*------------------------@Neol---------------------------------------------------*/



//Create factorial function and power function
//FACTORIAL NUMBER GETTER
function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT){
    let nun = []
    let factorial_sequence = 0;

    FACTORIAL_SEARCH_RESULT.forEach( factorial_index => {
        let number =[];
        let next_input_index = factorial_index + 1;
        let next_input = formula[next_input_index];
        if(next_input == FACTORIAL){
         factorial_sequence += 1;  
         return;
        }
        //we need to get the first factorial function if there occurs a factorial sequence
        let first_factorial_index = factorial_index - factorial_sequence;
       //to get the nember before the factorial function
       
        var previous_index = first_factorial_index  - 1;
        var parentheses_count = 0;
       
        while(previous_index >= 0){
        if( formula[previous_index ] == "(") parentheses_count --;
           if( formula[previous_index ] == ")") parentheses_count ++;
        
        let  is_operator = false;
        OPERATORS.forEach( OPERATOR => {
            if (formula[previous_index] == OPERATOR) is_operator = true;
        })
        if( is_operator && parentheses_count == 0 ) break;
         
        number.unshift(formula[previous_index]);
        previous_index--;
    }
    let number_str = number.join('');
    let factorial = "factorial(", close_parenthesis = ")";
    let times = factorial_sequence + 1;  
    let toReplace = number_str + FACTORIAL.repeat(times); 
    let replacement = factorial.repeat(times) + number_str + close_parenthesis.repeat(times);
    nun.push({
        toReplace : toReplace,
        replacement : replacement
    })

    //to reset previous sequence
    factorial_sequence = 0;
})
    return nun;
}    
//ARRAY SEARCH

function search(array, keyword){
    let search_result = [];

    array.forEach( (element, index) => {
        if (keyword == element) search_result.push(index)
    })
    return search_result;
}

//Update Output

function updateOutputOperation(operation){
    output_operation_element.innerHTML = operation
}
function updateOutputResult(result){
    output_result_element.innerHTML = result
}

//calculate the factorial of a number using JavaScript

function factorial(number) {
    
    if(number % 1 != 0) return gamma(number + 1);
    if (number === 0 || number === 1)
    return 1;
    let result = 1;
     
     for(let i = 1; i <= number; i++){
         result *= i; 
         if( result === Infinity) return Infinity;     
     };
     return result; 

 }




/*--------------------------------------------------------------------------------------*/


/*-------------------------------------@oluwabukunmi----------------------------------------------*/

// GAMMA FUNCTINON
function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
} 

// DEFINE TRIONOMETRIC FUNCTION
function trigo(callback, angle) {
    if (!RADIAN) {
        angle = angle * Math.PI/180;
    }
    return callback(angle);
}

// INVERSE TRIGONOMETRIC FUNCTION
function inv_trigo(callback, value) {
    let angle = callback(value);

    if(!RADIAN) {
        angle = angle * 180/Math.PI;
    }
    return angle;
}



// create number and key function


/*-----------------------------------------------------------------------------------------*/

/*-----------------------------------------------@Nevis -----------------------------*/

//create the trig function


/*--------------------------------------------------------------------------------------------*/


/*-------------------------------------------------@Opemipo------------------------------------------*/


//create the inverse trig function together with the reg and degree button




/*-------------------------------------------------------------------------------------------*/

/*------------------------------------@Blackaibinodee------------------------------------*/

//power base getter
function powerBaseGetter(formula, POWER_SEARCH_RESULT) {
    let powers_bases = [];  //bases are saved here

    POWER_SEARCH_RESULT.forEach(power_index => {
        let base = [];  //currrent base

        let parentheses_count = 0;
        let previous_index = power_index - 1;

        while (previous_index >= 0) {
            if (formula[previous_index] == "(") parentheses_count--;
            if (formula[previous_index] == ")") parentheses_count++;

            let is_operator = false;
            OPERATORS.forEach(OPERATOR => {
                if (formula[previous_index] == OPERATOR) is_operator = true;
            })

            let is_power = formula[previous_index] == POWER;

            if ((is_operator && parentheses_count == 0) || is_power) break;
            base.unshift(formula[previous_index]);
            previous_index--;
        }
        powers_bases.push(base.join(''));
    })
    return powers_bases;
}

/*----------------------------------------------------------------------------------------*/


/*-------------------------------------@menik------------------------------------------*/

                              //factorial function and getter

/*--------------------------------------------------------------------------------*/