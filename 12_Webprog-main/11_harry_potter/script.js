const caracters = document.querySelector('#characters');
//console.log(caracters);

const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json';

window.addEventListener('DOMContentLoaded', fetchCharacters);

 async function fetchCharacters() {
    try {
        const res = await fetch(HP_URL);
        //console.log(res);
        const chars = await res.json();
        //console.log(chars);
        displayCharacters(chars);
        
    } catch (error) {
        alert(error);
    }
}

function displayCharacters(chars) {
    //console.log(chars);
    if (!chars) {
        return alert('A tömböt elfelejtetted elküldeni!');
    }
    
    chars.forEach(char => {
        const charDiv = document.createElement('div');
        charDiv.className = 'card';

        const img = document.createElement('img');
        img.src = fixImageUrl(char.image);
        img.alt = char.name;

        const nev = document.createElement('div');
        nev.className = 'name';
        nev.textContent = char.name || 'Ismeretlen';

        const haz = document.createElement('div');
        haz.textContent = `Ház: ${char.house || 'Ismeretlen'}`;

        const szuletesiEv = document.createElement('div');
        szuletesiEv.textContent = `Születési év: ${char.yearOfBirth || 'Ismeretlen'}`;

        const szinesz = document.createElement('div');
        szinesz.textContent = `Színész: ${char.actor || 'Ismeretlen'}`;

        console.log(charDiv);
        charDiv.append(img, nev, haz, szuletesiEv, szinesz)
        caracters.appendChild(charDiv);
    });
};

function fixImageUrl(url) {
    if (!url) {
        return '';
    }

    return url
        .replace('http://hp-api.herokuapp.com','https://hp-api.onrender.com')
        .replace('https://','http://');
}