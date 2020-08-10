/*----------------------------------------@Tunrayo-----------------------------------*/



                                        //Calculator framework



/*---------------------------------------------------------------------------------*/



/*----------------------------------@Naomity----------------------------------------*/




                                   //ADD EVENT LISTENER





/*------------------------------------------------------------------------------------*/

/*-----------------------------------@Acel--------------------------------------*/


                              // Basic maths function and calculate function



/*-------------------------------------------------------------------------------------*/

/*------------------------@Neol---------------------------------------------------*/



                          //Create factorial function and power function


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
function sin(){
	var sinKey = document.getElementByID("input").value;
	 return Math.sin(value);
}
/*Cos*/
function cos(){
	var cosKey = document.getElementByID("input").value;
	 return Math.cos(value);
}
/*Tan*/
function tan(){
	var tanKey = document.getElementByID("input").value;
	 return Math.tan(value);
}


/*--------------------------------------------------------------------------------------------*/


/*-------------------------------------------------@Opemipo------------------------------------------*/


                      //create the inverse trig function together with the reg and degree button




/*-------------------------------------------------------------------------------------------*/

/*------------------------------------@Blackaibinodee------------------------------------*/

                              //power base getter
                              function powerBaseGetter(formula, POWER_SEARCH_RESULT){
                                let powers_bases = [];  //bases are saved here
                                
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

/*----------------------------------------------------------------------------------------*/


/*-------------------------------------@menik------------------------------------------*/

                              //factorial function and getter

/*--------------------------------------------------------------------------------*/
