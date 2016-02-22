
Guidebook.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel, NoteModel) {
    var chapters = ChapterModel.getChapters();
    for (var i=0; i<chapters.length; i++) {
      chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
    }
    $scope.chapters = chapters;
    $scope.selectedChapterId = $routeParams.chapterId;
    $scope.onDelete = function(noteId) {
      var confirmDelete = confirm('Are you sure you want to delete this note?');
      if (confirmDelete) {
        $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
      }
    };
  }
);

/*As you can see, the controller is still largely a single function.
We're simply adding it to our application namespace by calling Guidebook.controller (since Guidebook is the name we specified in our ng-app annotation).

Note the parameters our controller function accepts.
There's the $scope variable, which we've seen before,
but after that are all kinds of new things. What are these? They are explained as follows:

    $location is how AngularJS represents the current URL.
    We can use it to read or set the current location, allowing us to load new controllers/views.
    $routeParams are the parameters we pass via the URL.
    Remember how some of our route definitions had parameters? That's what we get in $routeParams.
    ChapterModel and NoteModel are our model objects.
    AngularJS will send these to our controller automatically, instantiated and ready to go.
    That last point, about ChapterModel and NoteModel, is called dependency injection.
    We'll discuss it again later, but note for now that the order of the parameters doesn't matter.

    The contents of the function are relatively straightforward.
    First, we get the chapter information from ChapterModel
    and combine that with any notes we retrieve from NoteModel.
    This will get the chapter and note data we need for the view,
    and we're setting it on our $scope variable so that the view will be able to access it through $scope.chapters, as we saw in chapters.html.*/

