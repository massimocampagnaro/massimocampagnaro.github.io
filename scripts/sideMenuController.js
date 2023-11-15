var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
    sidemenu.style.opacity = "1";
}
function closemenu(){
    if(innerWidth < 750){
        sidemenu.style.right = "-100vw";
        sidemenu.style.opacity = "0";
    }
}