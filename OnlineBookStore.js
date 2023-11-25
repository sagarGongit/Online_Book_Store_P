function OnlinebookStore(title,genre,author,name,nationality,price,birthYear) {
              this.title = title;
              this.genre = genre;
              this.author = author;
              this.name = name;
              this.nationality = nationality;
              this.price = price;
              this.birthYear = birthYear;
          
        this.Book = function(title,genre,price) {
            return "Title is "+this.title+" "+"genre "+this.genre+" "+"price "+this.price;
        }
}

 let s = new OnlinebookStore("the full moon","fragmented","premchand","Indian",200,1990);
     s.Book();