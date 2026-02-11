/*
<div class="card">
                <img src="./img/dog-1.jpg" alt="dog1">
                <div class="content">
                    <h3>Kártya #1</h3>
                    <p>dog-1.jpg</p>
                </div>
            </div>
*/

const section = document.querySelector("#cards");
const list_url = "src/kepek.txt";
const imgs = "img/";

window.addEventListener("DOMContentLoaded", loadCards);

async function loadCards() {
    try {
        const resp = await fetch(list_url);
        if(!resp.ok) {
            return alert("Nem sikerult betolteni.");
        }

        const text = await resp.text();

        const files = text.split("\n").map(x => x.trim()).filter(x => x.length > 0);

        if(files.length == 0) return alert("List ures.");

        section.innerHTML = "";
        files.forEach((filename, index) => {
            section.appendChild(createCard(filename, index))
        })
    } catch (e) {
        alert(`Hiba: ${e}`);
    }
}

function createCard(fileName, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = `./img/${fileName}`;
    fileName = fileName.replace(".jpg", "");
    img.alt = `${fileName}`
    card.appendChild(img);
    const content = document.createElement("div");
    content.classList.add("content");
    const h3 = document.createElement("h3");
    h3.textContent = `Kártya #${index + 1}`;
    content.appendChild(h3);
    const p = document.createElement("p");
    p.textContent = fileName;
    content.appendChild(p);
    card.appendChild(content);
    return card;
}