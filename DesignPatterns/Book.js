/**
 * Created by viveksh2 on 10/19/15.
 */
var Book = function(newIsbn,newTitle,newAuthor) {
    var title, isbn, author;
    var checkISBN = function (isbn) {
        //some implementation for the isbn checking needs to go here....
        return true;
    };

    this.setIsbn = function (newIsbn) {
        if (checkISBN(newIsbn)) {
            isbn = newIsbn;
        }

    };

    this.getIsbn = function () {
        return isbn;
    };

    this.setTitle = function (newTitle) {
        title = newTitle || 'No title specified';

    };

    this.getTitle = function () {
        return title;
    };

    this.setAuthor = function (newAuthor) {
        author = newAuthor || 'No Author specified';

    };

    this.getAuthor = function () {
        return author;
    };


    // Constructor code.
    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
};
Book.prototype.display = function(){
    return "The title is >> " + this.getTitle() +
            " The Author is >> " + this.getAuthor() +
            " The ISBN number is >> " + this.getIsbn();


};

Book.display2 = function(){
    return "The number of the arguments that the Book constructor function accepts >>" + Book.length;

};


var book1 = new Book(1234,"book1","viveksh2");
console.log(book1.display());
console.log(Book.display2());