 function callApi() {
    const res = fetch("https://api.punkapi.com/v2/beers")
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
        const myHtml = `
        <h1 class="beer-title">${data[3].name}</h1>
        <p class="beer-tagline" >${data[3].tagline}</p>
        <img class="bottle-image" src="${data[3].image_url}"/>
        <p class="beer-description" >${data[3].description}</p>

        `
        ;
        document.querySelector("div").innerHTML = myHtml;
    });

}


// faltan la descripción y el tag-line, pero no sé como individualizarlas. 
// tampoco sé como 


callApi()







/*
async function callApi() {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const finalRes = await res.jason();
    document.querySelector(h1).setAttribute("src",finalRes[3].name);
}

callApi()




async function callApi() {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const finalRes = await res.jason();
    document.querySelector("img").setAttribute("src",finalRes[3].image);
}

callApi()

*/
