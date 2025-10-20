const demo=document.querySelector('#demo')
// console.log(demo)
let isImageDisplayed=false
demo.addEventListener('mouseover',(event)=>{  
    // console.log(event)
    if (!isImageDisplayed && event.target === demo) {
        const img=document.createElement("img")
        img.src=`./img/kep.jpg`
        img.alt="kép"
        demo.replaceChildren(img)
        isImageDisplayed==true
    }
} )

demo.addEventListener('mouseout',(event)=>{
if (event.relatedTarget===null&& demo.contains(event.relatedTarget)) {
        const p=document.createElement('p')
        p.textContent='Hanyasra értékelek'
        demo.replaceChildren(p)
        isImageDisplayed==false
}
})