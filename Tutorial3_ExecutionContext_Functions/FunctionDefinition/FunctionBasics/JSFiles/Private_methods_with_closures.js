var Book = function(newIsbn, newTitle, newAuthor) { // implements Publication

  // Private attributes.
  var isbn, title, author;

  // Private method.
  function checkIsbn(isbn) {
    //todo*
  }  

  // Privileged methods.
  this.getIsbn = function() {
    return isbn;
  };
  this.setIsbn = function(newIsbn) {
    if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
    isbn = newIsbn;
  };

  this.getTitle = function() {
    return title;
  };
  this.setTitle = function(newTitle) {
    title = newTitle || 'No title specified';
  };

  this.getAuthor = function() {
    return author;
  };
  this.setAuthor = function(newAuthor) {
    author = newAuthor || 'No author specified';
  };

  // Constructor code.
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
  this.setAuthor(newAuthor);
};

// Public, non-privileged methods.
Book.prototype = {
  display: function() {
    //todo*
  }
};


/*
 So how is this different from the other patterns we've covered so far?
 In the other Book examples, we always created and referred to the attributes using the this keyword.
 In this example, we declared these variables using var.
 That means they will only exist within the Book constructor.
 We also declare the checkIsbn function in the same way, making it a private method.

 Any method that needs to access these variables and functions need only be declared within Book.
 These are called privileged methods because they are public but have access to private attributes and methods.
 The this keyword is used in front of these privileged functions to make them publicly accessible.
 Because these methods are defined within the Book constructor's scope, they can access the private attributes.
 They are not referred to using this because they aren't public.
 All of the accessor and mutator methods have been changed to refer to the attributes directly, without this.

 Any public method that does not need direct access to private attributes can be declared normally in the Book.prototype.
 An example of one of these methods is display; it doesn't need direct access to any of the private attributes because it can just call getIsbn or getTitle.
 It's a good idea to make a method privileged only if it needs direct access to the private members.
 Having too many privileged methods can cause memory problems because new copies of all privileged methods are created for each instance.

 With this pattern, you can create objects that have true private attributes.
 It is impossible for other programmers to create an instance of Book and directly access any of the data.
 You can tightly control what gets set because they are forced to go through the mutator methods.
 */
