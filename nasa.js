const axios = require("axios");

const NASA_API_KEY = "DgC9lHk5gzctHf4hE62f4UTkyAEZ2ASjeulTHzmf"; // Replace with your own key

function getNasaPhoto(callback) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    axios.get(url)
        .then((response) => callback(null, response.data))
        .catch((error) => callback(error, null));
}

getNasaPhoto((error, data) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("=== NASA API ===");
    console.log("Date:", data.date);
    console.log("Title:", data.title);
    console.log("Explanation:", data.explanation.substring(0, 200) + "...");
    console.log("Image URL:", data.url);
});
