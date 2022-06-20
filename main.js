const carousel = document.querySelector(".carousel");
const container = document.querySelector(".container");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");

let nbItem = 5;
let currentIndex = 0;

// Agrandit la largeur du container
container.style.width = `${carousel.offsetWidth * nbItem}px`;

// Crée les items du carousel
for (let i = 1; i <= nbItem; i++) {
    const item = nbItem[i];
    
    let div = document.createElement("div");
    div.className = "item__img";
    div.style.backgroundImage = `url('image/image_${i}.jpg')`;
    container.appendChild(div);
}

// Ajout des évent aux boutons
btnLeft.addEventListener("click", BtnLeftClick);
btnRight.addEventListener("click", BtnRightClick);
ToogleShowBtn();


function BtnLeftClick() {
    if (currentIndex <= 0) return;

    currentIndex--;
    container.style.transform = `translateX(${-currentIndex * carousel.clientWidth}px)`;
    container.style.transition = "transform 0.3s ease-in-out";
    ToogleShowBtn();
}

function BtnRightClick() {
    if (currentIndex >= nbItem - 1) return;

    currentIndex++;
    container.style.transform = `translateX(${-currentIndex * carousel.clientWidth}px)`;
    container.style.transition = "transform 0.3s ease-in-out";
    ToogleShowBtn();
}

function ToogleShowBtn() {
    if (currentIndex <= 0) 
        btnLeft.style.visibility = "hidden";
    else
        btnLeft.style.visibility = "visible";

    if (currentIndex >= nbItem - 1)
        btnRight.style.visibility = "hidden";
    else
        btnRight.style.visibility = "visible";
}