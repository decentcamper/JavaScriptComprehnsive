/**
 * Created with JetBrains WebStorm.
 * User: viveksh2
 * Date: 9/2/13
 * Time: 10:45 PM
 * To change this template use File | Settings | File Templates.
 */

    window.onload = initPage;

function initPage() {
    // find the thumbnails on the page
    thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");

    // set the handler for each image
    for (var i = 0; i < thumbs.length; i++) {
        image = thumbs[i];

        // create the onclick function
        image.onclick = function() {
            // find the image name
            detailURL = 'images/' + this.title + '-detail.jpg';
            document.getElementById("itemDetail").src = detailURL;
            getDetails(this.title);
        }
    }
}

function createRequest() {
    try {
        request = new XMLHttpRequest();
    } catch (tryMS) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (otherMS) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (failed) {
                request = null;
            }
        }
    }
    return request;
}

function getDetails(itemName) {
    request = createRequest();
    if (request == null) {
        alert("Unable to create request");
        return;
    }
    var url= "getDetails.php?ImageID=" + escape(itemName);
    request.open("GET", url, true);
    request.onreadystatechange = displayDetails;
    request.send(null);
}

function displayDetails() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var detailDiv = document.getElementById("description");

            //get json object
            var itemDetails = eval('(' + request.responseText + ')');

            // Remove existing item details (if any)
            var children = detailDiv.childNodes;
            for (var i=children.length; i>0; i--) {
                detailDiv.removeChild(children[i-1]);
            }

            // Add new item details
            for (var property in itemDetails) {
                var propertyValue = itemDetails[property];
                if (!isArray(propertyValue)) {
                    var p = document.createElement("p");
                    p.appendChild(
                        document.createTextNode(property + ": " + propertyValue));
                    detailDiv.appendChild(p);

                ...
                }