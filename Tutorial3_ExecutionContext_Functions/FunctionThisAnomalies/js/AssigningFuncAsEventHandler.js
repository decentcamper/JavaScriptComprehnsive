//Examples - copying
//
//this is written into the onclick method in the following cases:
//
//    element.onclick = doSomething
//element.addEventListener('click',doSomething,false)
//element.onclick = function () {this.style.color = '#cc0000';}
//<element onclick="this.style.color = '#cc0000';">
//
//Examples - referring
//
//In the following cases this refers to the window:
//
//element.onclick = function () {doSomething()}
//element.attachEvent('onclick',doSomething)
//    <element onclick="doSomething()">
//
//    Note the presence of attachEvent(). The main drawback of the Microsoft event registration model is that attachEvent() creates a reference to the function and does not copy it.
//    Therefore it is sometimes impossible to know which HTML currently handles the event.


function assign() {
    document.getElementById("myDiv").onclick = changeColor;
   document.getElementById("myButton").onclick = changeColor;

    //div >> onClick =changeColor
   // Button >> onClick =changeColor


}

function changeColor() {
    this.style.backgroundColor = '#FF2236';
}



function theDifference(){
    console.log( document.getElementById("myDiv").onclick);
    console.log( document.getElementById("myButtonInline").onclick);

}

