const demo=document.querySelector('#demo')
const area=document.querySelector('#AREA')
//console.log(demo,area)

area.addEventListener('keyup',()=>{
  
    demo.textContent='*'.repeat(area.value.length)
});