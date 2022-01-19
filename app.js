"use strict";

$("#submit-search").on("click", handleSearch);

async function handleSearch(evt) {
    evt.preventDefault();
    const searchTerm = $("#search-input").val();
    console.log(searchTerm);
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", 
        {params: {"q": searchTerm, "api_key": "GcAhuzzHGsYT5TKbnw0w1VdlhevbqF4D"}});
    console.log(response);
    console.log(response.data.data[0].embed_url);
}