class Reader {
	#name;
	#reader_id;
	#borrowed_books;
	constructor(name, reader_id, borrowed_books = []) {
		this.#name = name;
		this.#reader_id = reader_id;
		this.#borrowed_books = borrowed_books;
	}
	// Gauti skaitytojo varda
	getName() {
		console.log(this.#name);
	}
	// Nustatyti skaitytojo varda
	setName(newName) {
		console.log(`Your new name has been set to ${newName}`);
		return (this.#name = newName);
	}
	// Gauti skaitytojo ID
	getReaderId() {
		console.log(this.#reader_id);
	}
	// Nustatyti skaitytojo varda
	setReaderId(newReaderId) {
		console.log(`Your new reader ID has been set to ${newReaderId}`);
		return (this.#reader_id = newReaderId);
	}
	// Pasiskolinti knyga
	borrowBook(book) {
		if (this.#borrowed_books.includes(book)) {
			console.error(`The book "${book}" is already borrowed.`);
			return;
		}
		console.log(`You have borrowed the book "${book}"`);
		this.#borrowed_books.push(book);
	}
	// Grazinti knyga
	returnBook(book) {
		const findBorrowedBook = this.#borrowed_books.indexOf(book);

		if (findBorrowedBook >= 0) {
			this.#borrowed_books.splice(findBorrowedBook, 1);
			console.log(`The book "${book}" was returned.`);
		} else console.error(`The mentioned book "${book}" wasn't found`);
	}
	// Gauti pasiskolintas knygas
	getBorrowedBooks() {
		console.log(this.#borrowed_books);
	}
}

// const reader = new Reader("Petras", 1, ["Metai", "Faustas", "Hamletas"]);

// console.log(reader);

// // Atspausdina skaitytojo varda konsoleje.
// reader.getName();

// // Pakeicia skaitytojo varda.
// reader.setName("Antanas");

// // Atspausdina skaitytojo ID konsoleje.
// reader.getReaderId();

// // Pakeicia skaitytojo ID.
// reader.setReaderId(2);

// // Pasiskolina knyga ir i'pushina i masyva.
// reader.borrowBook("Altoriu sesely");

// // Grazina knyga (istrina is masyvo) jeigu tokia randa, jeigu ne tai ismeta error.
// reader.returnBook("Metai");

// // Atspausdina dabartini skaitytojo pasiskolintu knygu masyva.
// reader.getBorrowedBooks();
