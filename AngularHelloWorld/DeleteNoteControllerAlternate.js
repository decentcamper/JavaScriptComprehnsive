var deleteNoteController =  function DeleteNoteController($scope, $location, $routeParams, NoteModel) {
  var chapterId = $routeParams.chapterId;
  NoteModel.deleteNote(chapterId, $routeParams.noteId);
  $location.path('/chapter/' + chapterId);
}
deleteNoteController.$inject = ['$scope', '$location', '$routeParams', 'NoteModel'];
