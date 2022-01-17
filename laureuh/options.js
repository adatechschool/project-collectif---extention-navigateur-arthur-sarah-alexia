//choix du background
let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;
    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …create a button with that color…
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);



//choix du GIF

let gif = document.getElementById("buttonGif");
let chosenClassName = "current";
const presetButtonGifs = ["https://media.giphy.com/media/LxSFsOTa3ytEY/giphy.gif", "https://media.giphy.com/media/Kk9S4JvX439V6/giphy.gif", "https://media.giphy.com/media/Ev2Ov4wBz9Ogg/giphy.gif", "https://media3.giphy.com/media/3CWaVWrNJv27P4sPHR/giphy.gif?cid=6104955e422d685ec63161b7b494506866f4e14433187fde&rid=giphy.gif&ct=s"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonGifClick(event) {
  // Remove styling from the previously selected Gif
  let current = event.target.parentElement.querySelector(
    `.${chosenClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(chosenClassName);
  }

  // Mark the button as selected
  let pokemonGif = event.target.dataset.color;
  event.target.classList.add(chosenClassName);
  chrome.storage.sync.set({ pokemonGif });
}

// Add a button to the page for each supplied Gif
function constructGifOptions(buttonGifs) {
  chrome.storage.sync.get("pokemonGif", (data) => {
    let currentGif = data;
    console.log(data)
        // For each Gif we were provided…
    for (let [i, buttonGif] of buttonGifs.entries()) {
      // …create a button with that Gif...
      let button = document.createElement("button");
      button.dataset.color = buttonGif;
      button.style.backgroundImage = buttonGif;
      pokemonGif = presetButtonGifs[i];
      let url = `background-image: url(${pokemonGif}); background-size: 60px 60px`;
      button.style = url;

      // …mark the currently selected Gif…
      if (buttonGif === currentGif) {
        button.classList.add(chosenClassName);
      }

      // …and register a listener for when that button is clicked
      button.baseURI = pokemonGif;
      button.addEventListener("click", handleButtonGifClick);
      gif.appendChild(button);
    }
  });
}

// Initialize the page by constructing the Gifs options
constructGifOptions(presetButtonGifs);
