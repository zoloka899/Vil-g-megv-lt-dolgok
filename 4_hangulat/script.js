const moodSlider=document.querySelector("#Moodslider")
const MoodImage=document.querySelector("#MoodImage")
MoodImage.src=`./img/${moodSlider.value}.png`
//console.log(moodSlider);
moodSlider.addEventListener("input",()=>{
    const SliderValue=parseInt(moodSlider.value)+1
    //console.log(SliderValue);
    
    //console.log(MoodImage)
    MoodImage.src=`./img/${SliderValue}.png`
});