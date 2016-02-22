/**
 * Created with JetBrains WebStorm.
 * User: viveksh2
 * Date: 4/19/13
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */
//The following piece of code highlights how to get all the HTTP response headers, whereas
//if you want only one header value you could use the getResponseHeader() method as:
    alert(ajaxRequest.getResponseHeader("Content-type");
ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState == 4) {
        if (ajaxRequest.status == 200) {
            headers=ajaxRequest.getAllResponseHeaders();
            alert(headers);
        }
    }