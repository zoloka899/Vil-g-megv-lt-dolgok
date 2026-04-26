const tarolo = document.querySelector('.tarolo');
const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');

const uzik = [];
let zarvaVanE = true

//uzik.cs beolvasása
window.addEventListener('DOMContentLoaded', async() => {
    try {
        const res = await fetch('./uzik.csv')
        //console.log(res);
        const text = await res.text();
        //console.log(text);
        const sorok = text.split('\n').map(sor => sor.trim()).filter(sor => sor !== '')
        //console.log(sorok);
        sorok.forEach(sor => uzik.push(sor))
        console.log(uzik);
        
        
    } catch (error) {
        console.log(error);
        
    }
});

//animation, kattintás
tarolo.addEventListener('click', () => {
    if (zarvaVanE) {
        szoveg.textContent = '';
        tarolo.classList.remove('zar');
        tarolo.classList.add('nyit');
        zarvaVanE = false;
        
        setTimeout(() => {
            if (!zarvaVanE && uzik.length > 0) {
            szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)]
            }
        },300)
    }else {
        szoveg.textContent = '';
        tarolo.classList.remove('nyit');
        tarolo.classList.add('zar');
        zarvaVanE = true;
    }
});