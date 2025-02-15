class Book{
      constructor(title, author, year){
            this.title = title;
            this.author = author;
            this.year = year;
            this.isRead = false;
      }

      displayInfo(){
            return `${this.title} by ${this.author}, published in ${this.year}. Read: ${this.isRead ? "Yes" : "No"}`;
      }

      markAsRead(){
            this.isRead = true;
      }
}

class Library{
      constructor(){
            this.books = [];
      }

      addBook(book){
            this.books.push(book);
      }

      listBooks(){
            console.log("📚 لیست تمام کتاب‌ها:");
            this.books.forEach(book => console.log(book.displayInfo()));
      }

      listUnreadBooks(){
            console.log("📖 لیست کتاب‌های خوانده نشده:");
        this.books
            .filter(book => !book.isRead)
            .forEach(book => console.log(book.displayInfo()));
      }
}

const myLibrary = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

book2.markAsRead(); 

myLibrary.listBooks();      
myLibrary.listUnreadBooks();