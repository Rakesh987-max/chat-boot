let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendsearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    //div container..result Item
    let resultItemE1 = document.createElement("div");
    resultItemE1.classList.add("result-item");
    searchResultsE1.appendChild(resultItemE1);
    //Anchor Title--result 
    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-title");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank"; //other tap loo open avuthundhii
    resultItemE1.appendChild(resultTitleE1);
    //Title Break... 
    let titleBreak = document.createElement("br");
    resultTitleE1.appendChild(titleBreak);
    //Anchor URL 
    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.target = "_blank"; //other tap lo open avadankii 
    urlE1.textContent = link; //text manakii link loo ravaliii
    resultItemE1.appendChild(urlE1);
    //Line Break 
    let lineBreakE1 = document.createElement("br");
    resultItemE1.appendChild(lineBreakE1);
    // paragrap Description
    let DescriptionE1 = document.createElement("p");
    DescriptionE1.classList.add("line-description");
    DescriptionE1.textContent = description;
    resultItemE1.appendChild(DescriptionE1);

}

function displayResults(search_results) {
    spinnerE1.classList.toggle("d-none")
    for (let result of search_results) { //each one medhaa itrate
        createAndAppendsearchResult(result);
    }
}





function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.toggle("d-none") //class oontii remove avuthindhii lekapothi add avuthundhi
        searchInputE1.textContent = ""; //first india pedathamu next java pedatahmu india bottom loo java print avuthundhi so alla print avakudadhu so search reault empty avalii
        let searchInput = searchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            });
    }

}



searchInputE1.addEventListener("keydown", searchWikipedia);