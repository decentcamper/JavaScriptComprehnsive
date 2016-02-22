
var guidebookConfig = function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ChaptersController',
      templateUrl: 'view/chapters.html'
    })
    .when('/chapter/:chapterId', {
      controller: 'ChaptersController',
      templateUrl: 'view/chapters.html'
    })
    .when('/addNote/:chapterId', {
      controller: 'AddNoteController',
      templateUrl: 'view/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
      controller: 'DeleteNoteController',
      templateUrl: 'view/addNote.html'
    })
  ;
};

var Guidebook = angular.module('Guidebook', []).config(guidebookConfig);

/*

We'll start with the last line in the file. This is how you define an AngularJS namespace, called a module (we'll talk more about modules later).
By setting up our application this way, we can keep our controllers and models in their own application namespace,
 which is generally a best practice,
and especially important if this application is added to a page with other content.
As you can see, we're passing a list of routes to configure our application.
Routes define which controller is used for a given URL, and which view template to show using that controller.
Any parameters that the controller needs are passed as part of the URL.
For example, if we access http://your-webserver/guidebook.html#/chapter/2 then AngularJS will load
ChaptersController with the chapters.html view,
and pass along the value 2 as chapterId.

When we want to delete a note, say the fourth note from chapter one, we'll load a URL ending with #/deleteNode/1/4.
This will pass 1 and 4 to DeleteNoteController as chapterId and noteId.

*/
