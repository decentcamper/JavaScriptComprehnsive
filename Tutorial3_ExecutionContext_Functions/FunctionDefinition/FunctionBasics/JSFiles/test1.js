function invoke_and_add(a, b, condition){
    if(condition == "I am bored" ){
        return a() + b();

    }else{
        return a() - b();

    }


}


var one = function () {
    return 1;
};
var two = function two() {
    return 2;
}
;


var result = invoke_and_add(one,two,"I am bored");
alert(result);