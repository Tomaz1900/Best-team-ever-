document
  .getElementById("register-button")
  .addEventListener("click", function () {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    if (firstName && lastName) {
      document.getElementById("search-section").style.display = "block"; // Rodo paieškos laukelį
      document.getElementById("registration-form").style.display = "none"; // Paslepia registracijos laukelį
    } else {
      alert("Prašome įvesti vardą ir pavardę!"); // Praneša apie trūkumą
    }
  });

// Knygų duomenys
const booksData = {
  romanas: [
    {
      title: "Romanas A",
      description: "Aprašymas apie Romaną A",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Romanas B",
      description: "Aprašymas apie Romaną B",
      image: "https://via.placeholder.com/100",
    },
  ],
  fantastika: [
    {
      title: "Fantastika A",
      description: "Aprašymas apie Fantastiką A",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Fantastika B",
      description: "Aprašymas apie Fantastiką B",
      image: "https://via.placeholder.com/100",
    },
  ],
  pasakos: [
    {
      title: "Pasaka A",
      description: "Aprašymas apie Pasaką A",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Pasaka B",
      description: "Aprašymas apie Pasaką B",
      image: "https://via.placeholder.com/100",
    },
  ],
  mokslas: [
    {
      title: "Mokslas A",
      description: "Aprašymas apie Mokslą A",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Mokslas B",
      description: "Aprašymas apie Mokslą B",
      image: "https://via.placeholder.com/100",
    },
  ],
  peizija: [
    {
      title: "Peizija A",
      description: "Aprašymas apie Peiziją A",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Peizija B",
      description: "Aprašymas apie Peiziją B",
      image: "https://via.placeholder.com/100",
    },
  ],
};

// Mygtukų paspaudimų funkcionalumas
const categoryButtons = document.querySelectorAll(".category-button");
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    showBooks(category);
  });
});

// Funkcija, rodo knygas pasirinktoje kategorijoje
function showBooks(category) {
  document.getElementById("category-title").textContent =
    category.toUpperCase();
  document.getElementById("book-gallery").innerHTML = ""; // Išvalome anksčiau rodomas knygas
  booksData[category].forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <img src="${book.image}" alt="${book.title}">
            <p>${book.description}</p>
        `;
    document.getElementById("book-gallery").appendChild(bookItem);
  });
  document.getElementById("book-section").style.display = "block"; // Rodo knygų sekciją
}

// Funkcija rodyti knygas pasirinktoje kategorijoje
function showBooks(category) {
  document.getElementById("category-title").textContent =
    category.toUpperCase();
  document.getElementById("book-gallery").innerHTML = ""; // Išvalome anksčiau rodomas knygas
  booksData[category].forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <img src="${book.image}" alt="${book.title}">
            <p>${book.description}</p>
        `;
    document.getElementById("book-gallery").appendChild(bookItem);
  });
  document.getElementById("book-section").style.display = "block"; // Rodo knygų sekciją
  document.getElementById("back-button").style.display = "block"; // Rodo "Grįžti" mygtuką
}

// Grįžti mygtukas
document.getElementById("back-button").addEventListener("click", function () {
  document.getElementById("book-section").style.display = "none"; // Paslepia knygų sekciją
  document.getElementById("search-section").style.display = "block"; // Rodo paieškos sekciją
  this.style.display = "none"; // Paslepia "Grįžti" mygtuką
});

// Paieškos mygtuko funkcional․․․
document.getElementById("back-button").addEventListener("click", function () {
  document.getElementById("book-section").style.display = "none"; // Paslepia knygų sekciją
  document.getElementById("search-section").style.display = "block"; // Rodo paieškos sekciją
  this.style.display = "none"; // Paslepia "Grįžti" mygtuką
});

// Paieškos mygtuko funkcionalumas
document.getElementById("search-button").addEventListener("click", function () {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const matchedBooks = [];

  // Ieškome knygų visose kategorijose pagal paieškos terminą
  for (const category in booksData) {
    const books = booksData[category];
    books.forEach((book) => {
      // Patikriname, ar pavadinimas arba aprašymas atitinka paieškos terminą
      if (
        book.title.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
      ) {
        matchedBooks.push(book);
      }
    });
  }

  // Išvalome anksčiau rodomas knygas
  document.getElementById("book-gallery").innerHTML = "";

  if (matchedBooks.length > 0) {
    matchedBooks.forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.className = "book-item";
      bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <img src="${book.image}" alt="${book.title}">
                <p>${book.description}</p>
            `;
      document.getElementById("book-gallery").appendChild(bookItem);
    });
    document.getElementById("category-title").textContent = "IEŠKOMA KNYGA"; // Nustatome antraštę
    document.getElementById("book-section").style.display = "block"; // Rodo knygų sekciją
    document.getElementById("back-button").style.display = "block"; // Rodo "Grįžti" mygtuką
  } else {
    alert("Atsiprašome, tokių knygų neradome."); // Praneša, kad knygų nerasta
    document.getElementById("book-section").style.display = "none"; // Paslepia knygų sekciją
  }
});
