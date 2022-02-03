let book = document.getElementById("book");
let author = document.getElementById("author");
let button = document.getElementById("button");
button.addEventListener("click", function(){
    let books = {
        title : "The Complete Sherlock Holmes",
        userTitle : book.value,
        author : "Arthur Conan Doyle",
        userAuthor : author.value,
        readingStatus : function(){
            if(this.title.toLowerCase() === this.userTitle.toLowerCase() && this.author.toLowerCase() === this.userAuthor.toLowerCase()){
                alert(`Already read '${this.userTitle}' by ${this.userAuthor}.`)
            } 
            else alert(`You still need to read '${this.userTitle}' by ${this.userAuthor}.`)
        }
    }
    books.readingStatus();
});
