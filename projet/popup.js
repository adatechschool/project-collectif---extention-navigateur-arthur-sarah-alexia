async function fetchtxt() {
    let response = await fetch('https://animechan.vercel.app/api/random');
    let data = await response.json();

    let txtanime = document.querySelector("anime");
    anime.innerHTML = "Anime: " + data.anime;

    let txtcharacter = document.querySelector("character");
    character.innerHTML = "Character: " + data.character;

    let txtquote = document.querySelector("quote");
    quote.innerHTML = "Quote: " + data.quote;
};

//event listener
 let button = document.getElementById("getQuote");
    button.addEventListener("click", function () {
    fetchtxt();
});

