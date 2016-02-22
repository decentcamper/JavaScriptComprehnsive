function Shape(){
    this.name = 'shape';
    this.toString = function() {return this.name;};
}
function TwoDShape(){
    this.name = '2D shape';
}
function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function(){return this.side * this.height / 2;};

}


TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();
var trianagle1 = new Triangle();
trianagle1.toString();
var my = new Triangle(5, 10);
my.getArea();  //25
my.toString();  //25


var obj = {
 name:"Vivek"

};

var obj1 = new Object();

function obj2(){

    this.value = value;

}
obj2.protoype.name ="Vivek";
var obj3 = new obj2("Vivek");
var obj4 = new obj2("Vivek1");

obj3.name;
obj4.name;

