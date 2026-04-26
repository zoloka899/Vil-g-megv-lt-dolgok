const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');

//console.log(kupak, szoveg, tarolo);
const uzik = [];
let zarvaVanE = true;

// uzik.csv fetch
window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch('./uzik.csv');
        //console.log(response);
        const text = await response.text();
        //console.log(text);

        const sorok = text.split('\n').map(sor => sor.trim());
        //console.log(sorok);
        
        sorok.forEach(sor => {
            uzik.push(sor);
        });
        
    } catch (error) {
        console.log(error);
    }  
});

//console.log(uzik);

// Egy aszinkron, ami végiglépked a képeken.
const animateCap = async (start, end) => {
    const step = start < end ? 1 : -1; // Eldönti, hogy előre (kinyit) vagy visszafelé (bezár) kell lépkedni.

    // Addig megy, amíg el nem éri a cél képek. Pl. 0->10 kinyitás, vagy 10->0 visszazárás
    for (let index = start; index !== end + step; index+=step) {
        console.log(index);
        
        // Vár 13ms-ot mielőtt kicserélné a képet, ez sima animációt eredményez.
        await new Promise(resolve => setTimeout(resolve, 13));
        kupak.src = `./images/bottlecap_${index}.png`;
    }
}

tarolo.addEventListener('click', async () => {
    if(zarvaVanE) {
        //animálás kinyitáskor
        await animateCap(0, 10);
        szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)]
        zarvaVanE = false;
    } else {
        //animálás záráskor
        szoveg.textContent = '';
        await animateCap(10, 0);
        zarvaVanE = true;
    }
});