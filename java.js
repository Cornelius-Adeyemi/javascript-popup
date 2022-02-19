const buttonOpen = document.getElementById("popup-button");
const buttonClose = document.getElementById("close-button");
const  popupDiv   = document.getElementById("popup-div");
const overlayDiv =  document.getElementById("overlay");

buttonOpen.addEventListener("click",popit)

function popit(){
    popupDiv.classList.add("active");
    overlayDiv.classList.add("active");
}

buttonClose.addEventListener("click",closepop)

function closepop(){
    popupDiv.classList.remove("active");
    overlayDiv.classList.remove("active");
}

overlayDiv.addEventListener("click",closepop)