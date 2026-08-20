document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("book-list");
    const searchInput = document.getElementById("search");

    fetch('data/books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayBooks(data);
            setupSearch(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    function displayBooks(books) {
        // Clear existing books
        bookList.innerHTML = '';
        
        books.forEach(book => {
            const bookElement = createBookElement(book);
            bookList.appendChild(bookElement);
        });
    }

    function createBookElement(book) {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        const bookImage = document.createElement("img");
        bookImage.src = book.image;
        bookImage.alt = book.title;

        bookImage.onerror = function() {
            bookImage.src = 'assets/images/default.jpg'; // Default image path
            bookImage.alt = 'Default image for ' + book.title;
        };

        const bookTitle = document.createElement("div");
        bookTitle.className = "book-title";
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("div");
        bookAuthor.className = "book-author";
        bookAuthor.textContent = "by " + book.author;

        const bookDescription = document.createElement("p");
        bookDescription.textContent = book.description;

        const bookPrice = document.createElement("div");
        bookPrice.className = "book-price";
        bookPrice.textContent = "$" + book.price.toFixed(2);

        bookDiv.appendChild(bookImage);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookDescription);
        bookDiv.appendChild(bookPrice);

        return bookDiv;
    }

    function setupSearch(books) {
        searchInput.addEventListener("input", function() {
            const query = searchInput.value.toLowerCase();
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
            );
            displayBooks(filteredBooks);
        });
    }
});