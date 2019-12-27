var itemNum = document.querySelector('#itemNum')
var up = document.querySelector('#up');
var down = document.getElementById('down');
var itemSlider = document.querySelector(".itemSlider");
var itemImages = document.querySelectorAll(".itemSlider img");

//Counter
let counter = 1;
var itemNumbers = ["01", "02", "03"];
let i = 0;
const size = itemImages[0].clientHeight;

itemNum.innerHTML = itemNumbers[i];
itemSlider.style.transform = 'translateY(' + (-size * counter) + 'px)';

up.addEventListener("click",()=>{
    if(i <= itemNumbers.length){
        i++;
        itemNum.innerHTML = itemNumbers[i];
    }else{
        i = 0;
        itemNum.innerHTML = itemNumbers[i];
    }
    
    itemSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    itemSlider.style.transform = 'translateY(' + (-size * counter) + 'px)';
});

down.addEventListener("click",()=>{
    i--;
    itemNum.innerHTML = itemNumbers[i];
    itemSlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    itemSlider.style.transform = 'translateY(' + (-size * counter) + 'px)';
});

itemSlider.addEventListener("transitionend",()=>{
    if(itemImages[counter].id === 'lastClone'){
        itemSlider.style.transition = "none";
        counter = itemImages.length -2;
        itemSlider.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
    if(itemImages[counter].id === 'firstClone'){
        itemSlider.style.transition = "none";
        counter = itemImages.length - counter;
        itemSlider.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
})