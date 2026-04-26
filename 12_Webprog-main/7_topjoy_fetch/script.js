const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');
// console.log(messageBox,messageButton);

window.addEventListener('DOMContentLoaded', async () =>{
    try {
        const uzik = await fetch('./uzik.csv');
        //console.log(uzik);
        const uzikText = (await uzik.text()).split(`\n`).map(sor => sor.trim());
        //console.log(uzikText);
        uzikText.forEach(uzi =>{
            messages.unshift(uzi)
        });
        
    } catch (error) {
        console.error(error);
        
    }    
})

//console.log(messages);
messageButton.addEventListener('click', () =>{
    if (messages.length > 0) {
        const randomIndex = Math.floor(Math.random() * messages.length);

        messageBox.textContent = messages[randomIndex];
    }else {
        messageBox.textContent = 'Nem található üzenet';
    }
});
