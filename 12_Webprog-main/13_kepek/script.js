window.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    try {
        let images = [];
        const URL = "https://picsum.photos/v2/list";
        const res = await fetch(URL);
        //console.log(res);
        images = await res.json();
        //console.log(images);
        loadAuthors(images);
        displayImages(images);
    } catch (error) {
        console.error(error);
    }
}

function loadAuthors(images) {
    //console.log(images);
    const szerzok = document.getElementById("szerzok");
    //console.log(szerzok);
    szerzok.innerHTML = "";

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = "Összes";

    szerzok.append(firstOption);
    //console.log(szerzok);
    
    const authors = images.map(x=>x.author);
    //console.log(authors);

    const unique = new Set(authors);
    //console.log(unique);

    unique.forEach((author) => {
        const option = document.createElement("option");
        option.value = author;
        option.textContent = author;

        szerzok.append(option);
    });
    szerzok.addEventListener('change', () => authorFilter(images, szerzok));
}

function displayImages(images) {
    //console.log(images);
    const tarolo = document.querySelector("#tarolo");
    tarolo.innerHTML = "";
    images.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const img = document.createElement("img");
        img.classList.add("img");
        img.alt = image.author;
        img.src = `https://picsum.photos/id/${image.id}/600/400`;

        cardInner.append(img);
        card.append(cardInner);
        tarolo.append(card);
    });
    //console.log(tarolo);
}

function authorFilter(images, szerzok) {
    //console.log(asd);
    const value = szerzok.value;
    //console.log(value);

    if (!value) {
        return displayImages(images);
    }

    const filteredList = images.filter((x)=>x.author === value);
    //console.log(filteredList);
    displayImages(filteredList);
}