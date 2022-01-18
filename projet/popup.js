let getQuote = document.getElementById("getQuote");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
getQuote.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {};
xhr.open('GET', 'http://www.google.com');
xhr.send()












// async function callApi(){
// let call = await fetch('https://animechan.vercel.app/api/random')
// .then(response => response.json())
// .then(quote => console.log(quote))
// }