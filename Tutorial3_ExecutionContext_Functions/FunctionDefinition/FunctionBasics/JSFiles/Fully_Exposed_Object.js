
//The display method depends entirely on having an accurate ISBN. Without this, you can't fetch the image or provide a link to buy the book. Because of this, an error is thrown in the constructor if an ISBN is not given. The title and author attributes are both optional, so you provide defaults if they are not given. The Boolean OR operator, ||, can be used here to provide fallback values. If a title or author is given, the left side will evaluate to true and will be returned. If a title or author is not given, the left side of the operator will evaluate to false, and the right side will be returned instead.
//
//At first glance, this class seems to meet every need.
//    The biggest outstanding problem is that you can't verify the integrity of the ISBN data, which may cause your display method to fail. ' +
//'This breaks the contract you have with the other programmers. If the Book object doesn't throw any errors, the display method should work,
//    but without integrity checks, it won't. To fix this problem, you implement stronger checks on the ISBN:



var Book = function(isbn, title, author) {
  if(isbn == undefined) throw new Error('Book constructor requires an isbn.');
  this.isbn = isbn;
  this.title = title || 'No title specified';
  this.author = author || 'No author specified';
}

Book.prototype.display = function() {
       //todo*
};


/* With ISBN check. */

var Book = function(isbn, title, author) {
  if(!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
  this.isbn = isbn;
  this.title = title || 'No title specified';
  this.author = author || 'No author specified';
}

Book.prototype = {
  checkIsbn: function(isbn) {
    if(isbn == undefined || typeof isbn != 'string') {
      return false;
    }

    isbn = isbn.replace(/-/. ''); // Remove dashes.
    if(isbn.length != 10 && isbn.length != 13) {
      return false;
    }

    return true; // All tests passed.
  },

  display: function() {
   //todo*
  }
};


/*
 Here we add a checkIsbn method that ensures the ISBN is a string with the correct number of digits and the correct checksum.
 Since there are now two methods for this class, Book.prototype is set to an object literal, for defining multiple methods
 without having to start each one with Book.prototype. Both ways of defining methods are identical,
 and we use both interchangeably throughout the chapter.

 This seems to be an improvement.
 You are now able to verify that the ISBN is valid when the object is created, thus ensuring that the display method will succeed.
 However, a problem comes up. Another programmer notices that a book may have multiple editions, each with its own ISBN.
 He creates an algorithm for selecting among these different editions,
 and is using it to change the isbn attribute directly after instantiating the object:

 theHobbit.isbn = '978-0261103283';
 theHobbit.display();
 Even though you can verify the integrity of the data in the constructor,
 you don't have any control over what another programmer will assign to the attribute directly.
 In order to protect the internal data, you create accessor and mutator methods for each attribute.
 An accessor method (usually named in the form getAttributeName) will get the value of any of the attributes.
 A mutator method (usually named in the form setAttributeName) will set the value of the attribute.
 Using mutators, you can implement any kind of verification you like before you actually assign a new value to any of your attributes.
 Here is a new version of the Book object with accessors and mutators added:

 */



/* With mutators and accessors. */

var Book = function(isbn, title, author) { // implements Publication
  this.setIsbn(isbn);
  this.setTitle(title);
  this.setAuthor(author);
}

Book.prototype = {
  checkIsbn: function(isbn) {
    ...
  },
  getIsbn: function() {
    return this.isbn;
  },
  setIsbn: function(isbn) {
    if(!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
    this.isbn = isbn;
  },

  getTitle: function() {
    return this.title;
  },
  setTitle: function(title) {
    this.title = title || 'No title specified';
  },

  getAuthor: function() {
    return this.author;
  },
  setAuthor: function(author) {
    this.author = author || 'No author specified';
  },

  display: function() {
    //todo*
  }
};
