/**
 * Created by viveksh2 on 7/29/14.
 */
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
    return function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }

}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.
var janetName = celebrityName ("Janet"); // At this juncture, the celebrityName outer function has returned.
var randyName = celebrityName ("Randy"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
console.log(mjName ("Jackson")); // This celebrity is Michael Jackson 
console.log(janetName ("Jackson")); // This celebrity is Janet Jackson 
console.log(randyName ("Jackson")); // This celebrity is Randy Jackson 