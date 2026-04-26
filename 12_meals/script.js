const container = document.querySelector('#tarolo');
const button = document.querySelector('#fetch');
const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

window.addEventListener("DOMContentLoaded", fetchEtel);

button.addEventListener('click', async() => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        displayKaja(data.categories);
    } catch (error) {
        alert(error);
    }

function displayKaja(kaja) {
    if (!kaja) {
        return alert('A tömböt elfelejtetted elküldeni!');
    }
    kaja.forEach(kaja => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'card';

        const img = document.createElement('img');
        img.src = kaja.strCategoryThumb;
        img.alt = kaja.strCategory;

        const nev = document.createElement('div');
        nev.className = 'name';
        nev.textContent = kaja.strCategory;

        const leiras = document.createElement('div');
        leiras.textContent = kaja.strCategoryDescription;

        mealDiv.append(img, nev, leiras);
        container.appendChild(mealDiv);
    });
}});