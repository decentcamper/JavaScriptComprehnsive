/**
 * Created by viveksh2 on 9/28/15.
 */


var add = function(a,b){
    var x = a;
    var y = b;
    return x + y;


};

var add2 = add;

add2(3,5);

add2 = function(a,b){
    return a *b;

};

add2();

add = add2;
add(3,5);
