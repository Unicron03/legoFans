const iconMenu = document.querySelector(".iconMenu");
const menu = document.querySelector(".menu");

var nombreClickIconMenu = 0;

function animIconMenu(){
    nombreClickIconMenu++;
    if(nombreClickIconMenu%2===1){
        iconMenu.style.transform = "rotateZ(360deg)";
        iconMenu.style.left="70px"
        menu.style.opacity = "1";
        menu.style.zIndex = 13;
        menu.style.visibility = "visible";
    } else {
        iconMenu.style.transform = "rotateZ(-360deg)";
        menu.style.opacity = "0";
        iconMenu.style.left="12px"
        menu.style.zIndex = -1;
        menu.style.visibility = "hidden";
    }
}