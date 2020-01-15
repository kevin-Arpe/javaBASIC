let body = document.querySelector("body");
let IMG_NUMBER = 3;


function paintImage(IMG_NUMBER) {
    let image = new Image();
    image.src = `${IMG_NUMBER + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    let number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    let randomNumber = getRandom();
    paintImage(randomNumber);
}

init();