var sidemenu = document.getElementById("sidemenu");
var menutoggle = document.getElementsByClassName("menu-toggle-line");
var menubtn = document.getElementById("menu-button");

function togglemenu(){
    if(menubtn.value == "0"){
        openmenu();
        menubtn.value = "1";
    }
    else{
        closemenu();
        menubtn.value = "0";
    }

}

function openmenu(){
    sidemenu.style.right = "0";
    sidemenu.style.opacity = "1";

    menutoggle.item(0).style.transform = "translate(-5.2px, 0.5px) rotate(45deg) scale(0.8)";
    menutoggle.item(1).style.transform = "translate(5.2px, -5px) rotate(-45deg) scale(0.8)";
    menutoggle.item(2).style.transform = "translate(-5.2px, -0.5px) rotate(-45deg) scale(0.8)";
    menutoggle.item(3).style.transform = "translate(5.2px, -5.9px) rotate(45deg) scale(0.8)";
}

function closemenu(){
    if(innerWidth < 750){
        sidemenu.style.right = "100vw";
        sidemenu.style.opacity = "0";

        for(lines of menutoggle){
            lines.style.transform = "none";
        }
    }
}