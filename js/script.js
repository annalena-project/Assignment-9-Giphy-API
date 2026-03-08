console.log("script.js loaded");

const endpoint =
"https://api.giphy.com/v1/gifs/search?api_key=LLenvCeIrVVm10joOahJcoiP1VgXJiMj&q=dogs&limit=25&offset=0&rating=g&lang=en";

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });