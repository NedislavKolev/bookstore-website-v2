// JavaScript functionality for the bookstore application

// Function to load books from the server
function loadBooks() {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Code to update the UI with book data goes here
        });
}

// Initialize app upon loading
document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
});
