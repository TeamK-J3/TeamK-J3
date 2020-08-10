/*----------------------------------------@Tunrayo-----------------------------------*/



//Calculator framework



/*---------------------------------------------------------------------------------*/



/*----------------------------------@Naomity----------------------------------------*/

//ADD EVENT LISTENER

input_element.addEventListener('click', event => {
    const target_btn = event.target;

    calculator_buttons.forEach(button => {
        if (button.name == target_btn.id) calculator(button);
    })
})



/*------------------------------------------------------------------------------------*/

/*-----------------------------------@Acel--------------------------------------*/


// Basic maths function and calculate function



/*-------------------------------------------------------------------------------------*/

/*------------------------@Neol---------------------------------------------------*/



//Create factorial function and power function
//FACTORIAL NUMBER GETTER
function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT) {
    let nun = []
    let factorial_sequence = 0;

    FACTORIAL_SEARCH_RESULT.forEach(factorial_index => {
        let number = [];
        let next_input_index = factorial_index + 1;
        let next_input = formula[next_input_index];
        if (next_input == FACTORIAL) {
            factorial_sequence += 1;
            return;
        }
        //we need to get the first factorial function if there occurs a factorial sequence
        let first_factorial_index = factorial_index - factorial_sequence;
        //to get the nember before the factorial function

        var previous_index = first_factorial_index - 1;
        var parentheses_count = 0;

        while (previous_index >= 0) {
            if (formula[previous_index] == "(") parentheses_count--;
            if (formula[previous_index] == ")") parentheses_count++;

            let is_operator = false;
            OPERATORS.forEach(OPERATOR => {
                if (formula[previous_index] == OPERATOR) is_operator = true;
            })
            if (is_operator && parentheses_count == 0) break;

            number.unshift(formula[previous_index]);
            previous_index--;
        }
        let number_str = number.join('');
        let factorial = "factorial(", close_parenthesis = ")";
        let times = factorial_sequence + 1;
        let toReplace = number_str + FACTORIAL.repeat(times);
        let replacement = factorial.repeat(times) + number_str + close_parenthesis.repeat(times);
        nun.push({
            toReplace: toReplace,
            replacement: replacement
        })

        //to reset previous sequence
        factorial_sequence = 0;
    })
    return nun;
}
//ARRAY SEARCH

function search(array, keyword) {
    let search_result = [];

    array.forEach((element, index) => {
        if (keyword == element) search_result.push(index)
    })
    return search_result;
}
function factorial(number) {

    if (number % 1 != 0) return gamma(number + 1);
    if (number === 0 || number === 1)
        return 1;
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
        if (result === Infinity) return Infinity;
    };
    return result;

}

/*--------------------------------------------------------------------------------------*/


/*-------------------------------------@oluwabukunmi----------------------------------------------*/
//creating data variable
let data={
    operation: [],
    formula : []
}


// create number and key function

function calculator(button){
    if(button.type=="number"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);

    }else if (button.type =="key"){
        if(button.name =="clear"){
            data.operation =[];
            dta.formula =[];           
            updateOutputResult(0);

        }else if (button.name == "delete"){
            data.operation.pop();
            data.formula.pop();

        }else if (button.name =="rad"){
            RADIAN = true;
            angleToggler();
        }else if (button.name == "deg"){
            RADIAN=false;
            angleToggler();
        }
    }
}


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