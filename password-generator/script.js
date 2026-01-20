let inputSlider =    document.getElementById  ("inputSlider");
let passBox     =    document.getElementById  ("passBox");
let lowercase   =    document.getElementById  ("lowercase");
let numbers     =    document.getElementById  ("numbers");
let symbols     =    document.getElementById  ("symbols");
let genbtn      =    document.getElementById  ("genbtn");
let sliderValue =    document.getElementById  ("sliderValue");
let uppercase   =    document.getElementById  ("uppercase");
let copyicon = document.getElementById("copyIcon");



//showing input value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;

})


genbtn.addEventListener('click',()=>{

    passBox.value = genratePassword();


})

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "1234567890" ;
let symBols = "!@#$%^&*";



function genratePassword(){
    let genPassword ="";
    let allChars = "";

    allChars  += lowercase.checked ? lowerCase: "";
    allChars  += uppercase.checked? upperCase:"";
    allChars  += numbers.checked? allNumbers:"";
    allChars  += symbols.checked?symBols:"";


    if(allChars == ""|| allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputSlider.value)
{
    genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));

    i++;
}

return genPassword;
   
}

copyIcon.addEventListener('click', ()=>{

    navigator.clipboard.writeText(passBox.value)

    copyIcon.title = "password copied"
})