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


/*--------------------------------------------------------------------------------------*/


/*-------------------------------------@oluwabukunmi----------------------------------------------*/



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