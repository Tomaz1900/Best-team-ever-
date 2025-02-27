class Library {
    constructor(name) {
        this.name = name || "Biblioteka"; // Jei nepaduodamas pavadinimas, naudos default reikšmę
        this.categories = [];
    }

    async loadFromJSON(jsonFile) {
        const data = await fetch(jsonFile).then(res => res.json());
        this.categories = data.categories;
        console.log(`Bibliotekos "${this.name}" duomenys sėkmingai įkelti!`);
    }

    getAllBooks() {
        let allBooks = [];
        this.categories.forEach(category => {
            allBooks = allBooks.concat(category.books);
        });
        return allBooks;
    }

    searchBookByTitle(title) {
        let foundBooks = [];
        this.categories.forEach(category => {
            const books = category.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
            foundBooks = foundBooks.concat(books);
        });
        return foundBooks;
    }

    // ADMIN METODAI
    addCategory(categoryName) {
        this.categories.push({ categoryName, books: [] });
        console.log(`Kategorija "${categoryName}" pridėta.`);
    }

    addBook(categoryName, book) {
        const category = this.categories.find(cat => cat.categoryName === categoryName);
        if (category) {
            category.books.push(book);
            console.log(`Knyga "${book.title}" pridėta į kategoriją "${categoryName}".`);
        } else {
            console.log(`Kategorija "${categoryName}" nerasta.`);
        }
    }

    removeBook(categoryName, bookTitle) {
        const category = this.categories.find(cat => cat.categoryName === categoryName);
        if (category) {
            category.books = category.books.filter(book => book.title !== bookTitle);
            console.log(`Knyga "${bookTitle}" pašalinta iš kategorijos "${categoryName}".`);
        } else {
            console.log(`Kategorija "${categoryName}" nerasta.`);
        }
    }

    removeCategory(categoryName) {
        this.categories = this.categories.filter(cat => cat.categoryName !== categoryName);
        console.log(`Kategorija "${categoryName}" pašalinta.`);
    }
}

// Sukuriam biblioteką
const myLibrary = new Library("Miestelio biblioteka");

// Užkraunam duomenis iš JSON
myLibrary.loadFromJSON("books.json").then(() => {
    console.log("Visos knygos:", myLibrary.getAllBooks());
});
