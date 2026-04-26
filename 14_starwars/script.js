window.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    try {
        const URL = "https://akabab.github.io/starwars-api/api/all.json";
        const response = await fetch(URL);
        const kepek = await response.json();
        console.log(kepek);
        createCard(kepek);
    } catch (error) {
        console.error(error);
    }
}

function createCard(kepek) {
    const tarolo = document.querySelector("#tarolo");
    tarolo.innerHTML = " ";

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = kepek.image;

    card.appendChild(img);
    tarolo.appendChild(card);
}