 function createAuthor(name,birthYear,nationality) {
            this.name = name;
            this.birthYear = birthYear;
            this.nationality = nationality;
     }

     function createBook(title,author,price) {
             this.title = title;
             this.author = author;
             this.price = price;
     }
      
      let author1 = new createAuthor("Sagar",1890,"Australian");
      let author2 = new createAuthor("Codechand",1890,"Indian");

      let book1 = new createBook("The Spectacles",author1,600);
      let book2 = new createBook("Coding Ke Dohe",author2,340);

         function getInfo(book) {
             console.log(book);
         }
         
    getInfo(book1);
