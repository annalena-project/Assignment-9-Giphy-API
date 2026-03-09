console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

button.addEventListener("click", function () {

  const searchTerm = searchInput.value;

  const endpoint =
  `https://api.giphy.com/v1/gifs/search?api_key=LLenvCeIrVVm10joOahJcoiP1VgXJiMj&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {

      const images = data.data;
      console.log(images);

      gifContainer.innerHTML = "";

      for (let image of images) {
        const url = image.images.original.url;

        gifContainer.innerHTML +=
          `<img src="${url}" class="col-3 mb-3">`;
      }

    });

});