const kupak = document.querySelector('#kep');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');

//console.log(kupak, szoveg, tarolo);
const uzik = [];
let isClosed = true;

window.addEventListener('DOMContentLoaded', async()=>{
    try {
        const response = await fetch('./uzik.csv');
        //console.log(response);
        const text = await response.text();
        //console.log(text);

        const sorok = text.split('\n').map(sor => sor.trim());
        //console.log(sorok);
        
        sorok.forEach(sor => {
            uzik.push(sor);
        })

    } catch (error) {
        console.log(error);
        
    }
});

//console.log(uzik);

// egy aszinkron függvény, ami végiglépked a képeken
const animateCap = async(start, end) => {
    const step = start < end ? 1 : -1;
    for (let index = start; index != end + step; index+=step) {
        console.log(index);
        
        await new Promise(resolve => setTimeout(resolve, 13));
        kupak.src = `./images/bottlecap_${index}.png`
    }
}

tarolo.addEventListener('click', async () => {
    if (isClosed) {
        await animateCap(0, 10);
        szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)];
        isClosed = false;
    } else {
        szoveg.textContent = " ";
        await animateCap(10, 0);
        isClosed = true;
    }
});
