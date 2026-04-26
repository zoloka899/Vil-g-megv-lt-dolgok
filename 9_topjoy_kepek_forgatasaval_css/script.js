const tarolo = document.querySelector('.tarolo');
const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');

const uzik = [];
let zarvaVanE = true;

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = fetch("./uzik.csv");
    (await (await resp).text()).split("\n").map(x => x.trim()).filter(x => x.length !== 0).forEach(x => uzik.push(x));
  } catch (error) {
    console.error(error);
  }
})

tarolo.addEventListener("click", () => {
  if(zarvaVanE){
    tarolo.classList.remove("zar");
    tarolo.classList.add("nyit");
    szoveg.classList.remove("text-zar");
    szoveg.classList.add("text-nyit");
    zarvaVanE = false;

    if(!zarvaVanE && uzik.length > 0){
      szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)];
    }
  } else {
    szoveg.textContent = "";
    tarolo.classList.remove("nyit");
    tarolo.classList.add("zar");
    szoveg.classList.remove("text-nyit");
    szoveg.classList.add("text-zar");
    zarvaVanE = true;
  }
})