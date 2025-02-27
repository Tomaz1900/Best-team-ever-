class Category {
    #id;
    #categoryName;
    #books;

    static bookCounter = 0;

    constructor(id, categoryName){
        this.#id = Category.bookCounter++;
        this.#categoryName = categoryName;
        this.#books = [];
    }

    getId(){
        return this.#id;
    } 
    getCategoryName(){
        return this.#categoryName;
    } 
    getBooks(){
        return this.#books;
    }


    setCategoryName(newName){
        this.#categoryName = newName;
    }  

    setBooks(newBooksArray) {
        this.#books = newBooksArray;
    }


    
    getBooksByAuthor(authorName){
        return this.#books.filter(book => book.author === authorName);
    }
    getBooksByPriceRange(minPrice, maxPrice) {
        return this.#books.filter(book => book.price >= minPrice && book.price <= maxPrice);
    }


    addBook(book) {
        this.#books.push(book);
    }
}
