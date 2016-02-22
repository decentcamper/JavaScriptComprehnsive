
Guidebook.directive('gbNoteList', function() {
  return {
    restrict: 'A',
    templateUrl: 'view/directives/noteList.html',
    scope: {
      show: '=show',
      notes: '=notes',
      orderValue: '@orderBy',
      onDelete: '=deleteNoteHandler'
    }
  };
});
