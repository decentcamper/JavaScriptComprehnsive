/**
 * Created by viveksh2 on 9/29/14.
 */

var sum = function(a,b){
    return a +b;
}
var object1 = new Object();

object1.name= "Vivek";


object1.someFunction = sum;
object1.someFunction();
object1.someFunction = null;
delete object1.someFunction

sum.call(object1,12,13);






