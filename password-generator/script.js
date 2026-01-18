let inputSlider =    document.getElementById  ("inputSlider");
let passBox     =    document.getElementById  ("passBox");
let lowercase   =    document.getElementById  ("lowercase");
let numbers     =    document.getElementById  ("numbers");
let symbols     =    document.getElementById  ("symbols");
let genbtn      =    document.getElementById  ("genbtn");
let sliderValue =    document.getElementById  ("sliderValue");
let uppercase   =    document.getElementById  ("uppercase");


//showing input value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;

})