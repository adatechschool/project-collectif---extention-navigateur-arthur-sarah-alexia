// let getQuote = document.getElementById("getQuote");

// // chrome.storage.sync.get("color", ({ color }) => {
// //   changeColor.style.backgroundColor = color;
// // });

// // When the button is clicked, inject setPageBackgroundColor into current page
// getQuote.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: 
//   });
// });

import axios from "axios";
import { createSecureServer } from "http2";
const api = "https://animechan.vercel.app/api/quotes";
const errors = document.querySelector(".errors");
// const apiTitle = "https://animechan.vercel.app/api/quotes/anime?title=naruto"
// const apiCharacter = "https://animechan.vercel.app/api/quotes/character?name=saitama"
// const loading = document.querySelector(".loading");
const quote = document.querySelector(".quote");
const character = document.querySelector(".character");
const result = document.querySelector(".result-container");
result.style.display = "none";
loading.style.display = "none";

//grab the form (formulaire)
const form = document.querySelector(".form-data");
//grab the anime title
const anime = document.querySelector(".anime");

//declare method to search by anime title
const searchForTitle = async anime => {
    loading.style.display = "block";
    errors.textContent = "";
    try{
        const response = await axios.get(`${api}/${anime}`);
        loading.style.display = "none";
        quote.textContent = response.data.quote.value;
        character.textContent = response.data.character.value;
        result.style.display = "block";
    }
    catch (error){
        result.style.display = "none";
        loading.style.display = "none";
        errors.textContent = "Oops looks like we can't find it :o";
    }
};

//declare a function to handle form submission
const handleSubmit = async e => {
    e.preventDefault();
    searchForTitle(anime.value);
    console.log(anime.value);
};


//event listener
form.addEventListener("submit", e => handleSubmit(e));








// async function callApi(){
// let call = await fetch('https://animechan.vercel.app/api/random')
// .then(response => response.json())
// .then(quote => console.log(quote))
// }