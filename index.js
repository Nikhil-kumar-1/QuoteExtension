const getQuote = async () => {
    try {
        const res = await fetch("https://type.fit/api/quotes");
        const data = await res.json();

        // Choose a random quote from the array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;

        const myQuote = document.querySelector('#myQuote');
        myQuote.innerHTML = randomQuote;
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getQuote();
});
