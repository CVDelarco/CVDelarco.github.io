const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".popup-container .skip-button");

let remainingTime = 5;
let popupTimer;

const showAd = () =>{
    
        popupOverlay.classList.add("active");
        disableScroll();
        popupTimer = setInterval(() =>{
            remainingTime--;
            if(remainingTime < 0){
                clearInterval(popupTimer); 
            }
        },1000);
    
}
const skipAd = () => {      
    popupOverlay.classList.remove("active");
    window.removeEventListener("scroll");
}

const startTimer = () => {
    if(window.scrollY > 0){
        showAd();
        window.removeEventListener("scroll",startTimer);
    }
};
window.addEventListener("scroll",startTimer);
skipButton.addEventListener("click",() =>{
    skipAd();
});
function disableScroll() {
    scrollTop =window.pageYOffset || document.documentElement.scrollTop;
    }