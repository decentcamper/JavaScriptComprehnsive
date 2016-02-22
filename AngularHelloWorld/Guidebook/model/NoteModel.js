
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

/*

If you're familiar with HTML5, you'll recognize right away that we're using local storage to store our notes. This is another example of why integrating with existing web technologies is such a powerful pattern: there are plenty of ways to store and transfer data on the Web already, and AngularJS lets us use whichever we please (even another JavaScript framework).

Like ChapterModel, we're defining NoteModel as a service. This time, however, we're defining three model functions. Let's look at each one individually.

getNotesForChapter() is up first. It takes chapterId, and it will use that chapterId as a key in our local storage database. If it finds an entry for our chapter, we'll return the notes from that entry, and if it doesn't find anything, it returns an empty array.

    addNote() is next. In addition to chapterId, it also takes some noteContent. We use noteContent to create a note object, using the current time as a unique ID. Like before, we use chapterId to pull up the current notes for a given chapter. If we don't have any yet, it's time to create a chapter entry, which just consists of chapterId and an empty list of notes. Finally, we add our newly created note, and save the updated chapter entry back to local storage.

    deleteNote() is the last of our NoteModel functions. This time, we check for a chapter entry right away, and exit if we can't find one. (No sense deleting something that doesn't exist, right?) If there are notes for the given chapter, we cycle through them and delete the target note if we find it.

    That's it for our models! They're quite a bit easier to digest than views and controllers, and this makes sense when you think about it. Views and controllers must concern themselves with data manipulation and user input, while models are entirely single-purpose, and only care about storing data. As we just saw, how data is stored is completely up to each model—whether it's a hardcoded list of data or a local storage interface, it doesn't matter to the controller.

    By building our application following the Model-View-Controller pattern, we have an application architecture that will scale. If we wanted to add a new feature to our little Guidebook, we know exactly what steps to follow:

    Create views based on what the user needs to see and do.
    Define controllers to provide those views with the properties and functions that they require.
    Build models to store data requested by the controllers.
    Using the structure we have designed in this section, there's little room for bad design to slip into our application. We have a clean separation of purpose: our views and controllers only communicate through $scope and ng-model, and our models expose data retrieval functions to our controllers, who have no knowledge of how that data is stored.

With a solid foundation under our belt, it's time to get into the really exciting stuff. The next section dives deep into the inner workings of five key features that will transform you from an AngularJS developer to an AngularJS guru.*/
