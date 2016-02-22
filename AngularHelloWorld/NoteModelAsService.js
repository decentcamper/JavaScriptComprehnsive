
Guidebook.service('NoteModel',
  function() {
    this.getNotesForChapter = function(chapterId) {
      var chapter = JSON.parse(window.localStorage.getItem(chapterId));
      if (!chapter) {
        return [];
      }
      return chapter.notes;
    };
    this.addNote = function(chapterId, noteContent) {
      var now = new Date();
      var note = {
        content: noteContent,
        id: now
      };
      var chapter = JSON.parse(window.localStorage.getItem(chapterId));
      if (!chapter) {
        chapter = {
          id: chapterId,
          notes: []
        }
      }
      chapter.notes.push(note);
      window.localStorage.setItem(chapterId, JSON.stringify(chapter));
    };
    this.deleteNote = function(chapterId, noteId) {
      var chapter = JSON.parse(window.localStorage.getItem(chapterId));
      if (!chapter || !chapter.notes) {
        return;
      }
      for (var i=0; i<chapter.notes.length; i++) {
        if (chapter.notes[i].id === noteId) {
          chapter.notes.splice(i, 1);
          window.localStorage.setItem(chapterId, JSON.stringify(chapter));
          return;
        }
      }
    };
  }
);
