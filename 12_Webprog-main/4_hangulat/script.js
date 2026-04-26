const moodSlider = document.querySelector('#moodSlider');
const moodImage = document.querySelector('#moodImage');

//console.log(moodSlider, moodImage);

window.addEventListener('DOMContentLoaded', () => {
    moodImage.src = `./img/${moodSlider.value}.png`
});

moodSlider.addEventListener('input', () => {
    const sliderValue = parseInt(moodSlider.value) + 1;
    //console.log(sliderValue);
    
    //console.log(moodImage);
    moodImage.src = `./img/${sliderValue}.png`;
});