const axios = require("axios");

function getRandomUsers(count, callback) {
    const url = `https://randomuser.me/api/?results=${count}`;

    axios.get(url)
        .then((response) => callback(null, response.data))
        .catch((error) => callback(error, null));
}

getRandomUsers(3, (error, data) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("=== RandomUser API ===");
    data.results.forEach((user, i) => {
        console.log(`\nUser ${i + 1}:`);
        console.log("  Name:", user.name.first, user.name.last);
        console.log("  Email:", user.email);
        console.log("  Country:", user.location.country);
        console.log("  Phone:", user.phone);
    });
});
