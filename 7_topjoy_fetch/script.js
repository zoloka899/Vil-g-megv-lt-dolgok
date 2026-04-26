const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');
let uzenetek = [];

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const uzik = await fetch('https://raw.githubusercontent.com/dominik39293/webprog/refs/heads/main/7_topjoy_fetch/uzik.csv');
        (await uzik.text()).split("\r\n").map(x => x.trim()).forEach(sor => {
            uzenetek.push(sor);
        });
    } catch (error) {
        console.error(error);
    }
});


messageButton.addEventListener("click", () => {
    messageBox.textContent = uzenetek[Math.floor(Math.random() * uzenetek.length)];
})