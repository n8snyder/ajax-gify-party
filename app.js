"use strict";

$("#submit-search").on("click", handleSearch);

$("#clear-gifs").on("click", clearGifs);

/** Handles click on submit button,
 * returns gif image from Giphy API,
 * and adds it to our list of gifs on DOM
 */
async function handleSearch(evt) {
    evt.preventDefault();
    const searchTerm = $("#search-input").val();
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", 
        {params: {"q": searchTerm, "api_key": "GcAhuzzHGsYT5TKbnw0w1VdlhevbqF4D"}});
    let gif = $(`<img src=${response.data.data[0].images.original.url}>`);
    $("#gif-container").append(gif);
}

/** Clears gif container on click */
function clearGifs() {
    $("#gif-container").empty();
}