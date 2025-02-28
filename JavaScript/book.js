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