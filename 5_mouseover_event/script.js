const demo = document.querySelector('#demo');
//console.log(demo);
let isImageDisplayed = false; //állapot jelző

demo.addEventListener('mouseover', (event)=> {
    //console.log(event);
    if (!isImageDisplayed && event.target === demo) {
        const img = document.createElement('img');
        img.src = './img/kep.jpg';
        img.alt = 'kep';

        demo.replaceChildren(img);
        isImageDisplayed=true;
    }
});

demo.addEventListener('mouseout', (event)=>{
    if (isImageDisplayed && event.target === demo) {
        const p = document.createElement('p');
        p.textContent = 'Hanyasra értékellek ?';

        demo.replaceChildren(p);
        isImageDisplayed=false;
    }
});