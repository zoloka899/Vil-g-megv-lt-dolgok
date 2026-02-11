const characters = document.querySelector("#characters");

const url = "https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json";


const fetchCharacters = async() => {
    try {
        const resp = await fetch(url);
        const chars = await resp.json();

        displayChars(chars);
    } catch (e) {
        alert(`Hiba: ${e}`);
    }
}

const displayChars = (chars) => {
    chars.forEach(char => {
        if(char.image === "" || char.name === "" || char.house === "" || !char.yearOfBirth || char.actor === "") return;
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = fixImgUrl(char.image);
        img.alt = char.name;
        card.appendChild(img);
        const h3 = document.createElement("div");
        h3.textContent = char.name;
        h3.classList.add("name");
        card.appendChild(h3);
        const p = document.createElement("div");
        p.textContent = `Ház: ${char.house}`;
        card.appendChild(p);
        const p2 = document.createElement("div");
        p2.textContent = `Születési év: ${char.yearOfBirth}`;
        card.appendChild(p2);
        const p3 = document.createElement("div");
        p3.textContent = `Szinész: ${char.actor}`;
        card.appendChild(p3);
        characters.appendChild(card);
    })
}

function fixImgUrl(uri) {
    if(!uri) return null;

    return uri.replace("http://", "https://").replace("herokuapp.com", "onrender.com")
}

window.addEventListener("DOMContentLoaded", fetchCharacters);