// Sveiki, kolegos   sveiki, kolegos

class Book {
  constructor(id, title, author, isbn, price, description) {
    this.id = id; // unikalus knygos numeris
    this.title = title; // knygos pavadinimas
    this.author = author; // knygos autorius
    this.isbn = isbn; // knygos ISBN numeris
    this.price = price; // knygos kaina
    this.description = description; // trumpas knygos aprašymas
    this.is_checked_out = false; // ar knyga pasiskolinta
  }

  // Geteriai
  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getIsbn() {
    return this.isbn;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }

  isCheckedOut() {
    return this.is_checked_out;
  }

  // Seteriai
  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  setIsbn(isbn) {
    this.isbn = isbn;
  }

  setPrice(price) {
    this.price = price;
  }

  setDescription(description) {
    this.description = description;
  }

  checkAvailability() {
    return !this.is_checked_out;
  }

  checkOut() {
    if (this.checkAvailability()) {
      this.is_checked_out = true;
      return true;
    }
    return false;
  }

  checkIn() {
    this.is_checked_out = false;
  }
}
//kategoriju klase
class Category {
  constructor(id, categoryName) {
    this.id = id; // unikalus kategorijos numeris
    this.categoryName = categoryName; // kategorijos pavadinimas
    this.books = []; // masyvas, kuriame saugomos knygos
  }

  // Geteriai
  getId() {
    return this.id;
  }

  getCategoryName() {
    return this.categoryName;
  }

  getBooks() {
    return this.books;
  }

  // Seteriai
  setCategoryName(categoryName) {
    this.categoryName = categoryName;
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooksByAuthor(authorName) {
    return this.books.filter((book) => book.getAuthor() === authorName);
  }

  getBooksByPriceRange(minPrice, maxPrice) {
    return this.books.filter(
      (book) => book.getPrice() >= minPrice && book.getPrice() <= maxPrice
    );
  }
}
//library klase
class Library {
  constructor() {
    this.categories = []; // masyvas, kuriame saugomos kategorijos objektai
  }

  // Geteriai
  getCategories() {
    return this.categories;
  }

  // Seteriai
  addCategory(category) {
    this.categories.push(category);
  }
}
//skaitytojo klase
class Reader {
  constructor(name, reader_id) {
    this.name = name; // skaitytojo vardas
    this.reader_id = reader_id; // unikalus skaitytojo identifikatorius
    this.borrowed_books = []; // pasiskolintos knygos
  }

  // Geteriai
  getName() {
    return this.name;
  }

  getReaderId() {
    return this.reader_id;
  }

  getBorrowedBooks() {
    return this.borrowed_books;
  }

  // Seteriai
  setName(name) {
    this.name = name;
  }

  setReaderId(reader_id) {
    this.reader_id = reader_id;
  }

  borrowBook(book) {
    if (book.checkAvailability()) {
      this.borrowed_books.push(book);
      book.checkOut();
    } else {
      console.log(`Knyga "${book.getTitle()}" yra jau pasiskolinta.`);
    }
  }

  returnBook(book) {
    const index = this.borrowed_books.indexOf(book);
    if (index > -1) {
      this.borrowed_books.splice(index, 1);
      book.checkIn();
    } else {
      console.log(
        `Knyga "${book.getTitle()}" nebuvo paskolinta šiam skaitytojui.`
      );
    }
  }
}
//rating klase
class Rating {
  constructor(id, bookId, readerId, rating, comment) {
    this.id = id; // unikalus atsiliepimo numeris
    this.bookId = bookId; // nuoroda į knygos id
    this.readerId = readerId; // nuoroda į skaitytojo id
    this.rating = rating; // įvertinimas (1-5)
    this.comment = comment; // atsiliepimo tekstas
  }

  // Geteriai
  getId() {
    return this.id;
  }

  getBookId() {
    return this.bookId;
  }

  getReaderId() {
    return this.readerId;
  }

  getRating() {
    return this.rating;
  }

  getComment() {
    return this.comment;
  }

  // Seteriai
  setRating(rating) {
    this.rating = rating;
  }

  setComment(comment) {
    this.comment = comment;
  }
}
