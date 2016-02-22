/**
 * Created by viveksh2 on 5/4/15.
 */
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables

       return {
           getID:function()  {
        // This inner function will return the UPDATED celebrityID variable
        // It will return the current value of celebrityID, even after the changeTheID function changes it
        return celebrityID;
           },
            setID:function(id)  {
        // This inner function will return the UPDATED celebrityID variable
        // It will return the current value of celebrityID, even after the changeTheID function changes it
         celebrityID = id;
           }

       }



}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
 