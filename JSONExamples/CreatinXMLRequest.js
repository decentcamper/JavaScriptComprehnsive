/**
 * Created with JetBrains WebStorm.
 * User: viveksh2
 * Date: 4/19/13
 * Time: 12:05 PM
 * To change this template use File | Settings | File Templates.
 */
/*Check browser type and create ajax request object
 Put this function in an external .js file and use it for your
 Ajax programs */
function CreateRequestObject(){
    var ajaxRequest; // The variable that makes Ajax possible!
    try{
// Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest(); // Create the object
    }
    catch (e){
// Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e){
                return false;
            }
        }
    }
    return ajaxRequest;
} //End function