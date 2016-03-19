/**
 * Created by viveksh2 on 3/12/16.
 */
(function goAjax(){
    var ajaxRequest=CreateRequestObject();           /* Cross browser check;
     Get a new XMLHttpRequest object */
    if( ajaxRequest != false){
        var baseURL = 'http://image.tmdb.org/t/p/w500/';
        /* If we got back a request object Create callback function to check state of the request*/
        ajaxRequest.onreadystatechange = function(){
            if(ajaxRequest.readyState == 4){
                if(ajaxRequest.status==200){
                    var results = JSON.parse(ajaxRequest.responseText).results;
                    var theHTML = '' ;
                    results.forEach(function(ele, index,arr){
                        theHTML += '<div>';
                        theHTML += '<h3 class="caption">' + ele.original_title + '</h3>';
                        theHTML += "<img width= '190' src= " + baseURL+ ele.poster_path + " alt= " + ele.original_title+ " >";
                        theHTML+=  "<p>" +  ele.overview + "</p>";
                        theHTML+= "<p>Release Date : " +  ele.release_date + "</p>";
                        theHTML+= "<p>Rated R : " +  ele.adult + "</p>";
                        theHTML+= '</div>';
                    });
                   console.log(theHTML) ;
                   document.getElementById('parent').innerHTML =  theHTML;
                }
            }
        }; // End callback function
        //yourname=document.getElementById("username").value;
        ajaxRequest.open("GET",'https://api.themoviedb.org/3/discover/movie?api_key=8ba9de8b2a7f0c16b68b1c902d81da58&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22');
        ajaxRequest.send(null);
    } //End if
    else{ alert("Browser problem was encounered!");
    }
})(); // End ajaxFunction()

