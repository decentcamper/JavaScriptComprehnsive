/**
 * Created with JetBrains WebStorm.
 * User: viveksh2
 * Date: 7/9/13
 * Time: 1:57 PM
 * To change this template use File | Settings | File Templates.
 */
function testAddSubtract(){


    var operands=prompt("Give me the operands to ", "Key in the operands and operation");
    if ( operands == null){ // if user presses the cancel button
        alert("Not sharing your age with me");
    }
    else{
        document.getElementById('resultText').value = eval(operands);
       alert("Result is " + eval(operands));
    }


}