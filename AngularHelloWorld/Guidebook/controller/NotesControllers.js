
Guidebook.controller('AddNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    var chapterId = $routeParams.chapterId;
    $scope.cancel = function() {
      $location.path('/chapter/' + chapterId);
    }
    $scope.createNote = function() {
      NoteModel.addNote(chapterId, $scope.note.content);
      $location.path('/chapter/' + chapterId);
    }
  }
);

Guidebook.controller('DeleteNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    var chapterId = $routeParams.chapterId;
    NoteModel.deleteNote(chapterId, $routeParams.noteId);
    $scope.selectedChapterId = chapterId;
    $location.path('/chapter/' + chapterId);
  }
);
/*

We have two controller functions in this file,
AddNoteController and DeleteNoteController.
We're defining them the same way we defined our ChaptersController, and you can see that they take the same parameters, minus the ChapterModel, which they don't need.

The DeleteNoteController function is similar to ChaptersController.
It grabs the chapterId and noteId from $routeParams, and uses those to send a delete call to our NoteModel.
After that, we redirect back to the ChaptersController function.

The AddNoteController function is a little different. We're setting two functions here, for the form we saw in addNote.html:

cancel() will return to the chapter list, via the ChaptersController function
createNote() will tell the NoteModel model object to add the new note, then redirect to the ChaptersController function
So far we've looked at both our views, and all three of our controllers. Let's take stock of what we have before moving on to the models.

    For starters, there's a very loose coupling between controllers and views.
    Unlike our Hello World example, where we bound the controller directly in the view, we're using routes to give us a little more liberty.
    (The same view can be reused for multiple controllers, for example.)

    We also saw two different ways of loading a controller.
    Ultimately, a new controller is only loaded when the URL changes, but we can do that from either the view or the controller.
    In chapters.html, for example, there are several HTML links that lead to new URLs.
    In our controllers, we changed the URL by modifying the $location parameter. These are both valid ways to load new controllers.

    Lastly, there's $scope.
     Note that this is the only way for views and controllers to share information.
     The view expects the controller to set various properties on $scope, and it can also assign data to controllers through $scope using the ng-model annotation.

We're two thirds of the way through our MVC application, and the hard part is behind us. We've learned how to define views and controllers, and how they can interact with each other through routes and $scope. Let's add the final piece of the puzzle.
*/
