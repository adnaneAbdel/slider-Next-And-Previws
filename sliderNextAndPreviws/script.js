//get the place for append the content there for number slider
let placeOfNumberOfSlider = document.querySelector(".numberOfSlider");
//create element and get him className:
let elementUl = document.createElement('ul');
elementUl.classList.add("liste");
//get all image 
let picturs = Array.from(document.querySelectorAll("img"));
currentSlider = 1 ;
countSlider = picturs.length ;

//loop for get the numbers of sliders

for (let i = 1; i < 6; i++) {
    let elementLi = document.createElement('li');
    
    // if (i === 1) {
    //     elementLi.classList.add('activeForNumber');
    // }
    elementLi.classList.add('insideListe');
    let contain = document.createTextNode([i]);
    elementLi.appendChild(contain);
    elementUl.appendChild(elementLi);
    
}
//put the element in html 
placeOfNumberOfSlider.appendChild(elementUl);
//create a ul and get the li element all 
let theAllLiElement = Array.from(document.querySelectorAll("li"));
// import the both button :
let nextGo = document.querySelector(".nextBtn");
let prevGo = document.querySelector(".prevBtn");
//create class desiplad for btn
if (currentSlider == 1) {
    prevGo.classList.add('disabled');
}else{
    prevGo.classList.remove('disabled');
}
//create a fcuntion :


function checkted(){
//show counter of slider dynamic
let sliderHachtag = document.querySelector(".sliderNum");
sliderHachtag.innerHTML = `Slider #${currentSlider} of ${countSlider} `;
updateClassesRmove();
//image change dynamic 
picturs[currentSlider - 1].classList.add("active");
//li dynamic active 
elementUl.children[currentSlider - 1].classList.add('activeForNumber');

}

nextGo.onclick = function(){
    currentSlider++;
    checkted();

}
prevGo.onclick = function(){
    currentSlider--;
    checkted();
}

function updateClassesRmove(){
    picturs.forEach(function(img){
        img.classList.remove('active');
    });

    theAllLiElement.forEach(function(items){
        items.classList.remove('activeForNumber')
    });
}

checkted();

//get the sliderNum 

