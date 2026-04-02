const axios = require("axios");

function searchBooks(query, callback) {
    const url = `https://openlibrary.org/search.json?q=${query}&limit=3`;

    axios.get(url)
        .then((response) => callback(null, response.data))
        .catch((error) => callback(error, null));
}

searchBooks("javascript", (error, data) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("=== Open Library API ===");
    console.log("Total results:", data.numFound);
    data.docs.forEach((book, i) => {
        console.log(`\nBook ${i + 1}:`);
        console.log("  Title:", book.title);
        console.log("  Author:", book.author_name ? book.author_name[0] : "Unknown");
        console.log("  First Published:", book.first_publish_year || "N/A");
    });
});
