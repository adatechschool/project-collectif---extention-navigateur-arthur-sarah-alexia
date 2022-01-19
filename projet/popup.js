// import axios from "axios";
// const api = "https://animechan.vercel.app/api/quotes";
// const errors = document.querySelector(".errors");
// // const apiTitle = "https://animechan.vercel.app/api/quotes/anime?title=naruto"
// // const apiCharacter = "https://animechan.vercel.app/api/quotes/character?name=saitama"
// const loading = document.querySelector(".loading");
// const quote = document.querySelector(".anime");
// const character = document.querySelector(".character");
// const result = document.querySelector(".result-container");
// result.style.display = "none";
// loading.style.display = "none";

// // //grab the form (formulaire)
// const form = document.querySelector(".form-data");
// //grab the anime title
// const anime = document.querySelector(".anime-title");

// //declare method to search by anime title
// const searchForTitle = async anime => {
//     loading.style.display = "block";
//     errors.textContent = "";
//     try{
//         const response = await axios.get(`${api}/${anime}`);
//         console.log(response)
//         loading.style.display = "none";
//         quote.textContent = response.data.quote;
//         character.textContent = response.data.character;
//         result.style.display = "block";
//     }
//     catch (error){
//         result.style.display = "none";
//         loading.style.display = "none";
//         errors.textContent = "Oops looks like we can't find it :o";
//     }
// };

async function fetchtxt() {
    let response = await fetch('https://animechan.vercel.app/api/random');
    let data = await response.json();
    let result = "Anime : " + data.anime + "\n" + "Character : " + data.character + "\n" + "Quote : " + data.quote;
    let txtquote = document.querySelector("quote");
    quote.innerHTML = data.quote;
    console.log(txtquote.data)
    txtquote.data = result;

}
//event listener
 let button = document.getElementById("getQuote");
 button.addEventListener("click", function () {
     fetchtxt();
});

// Ci dessous le code marche
//declare a function to handle form submission
// // function handleSubmit() {
//     e.preventDefault();
//     searchForTitle(anime);
//     console.log(anime);
// };