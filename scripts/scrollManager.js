var body = document.querySelector("body");
var nav = document.getElementById("movable-nav");
var up = document.getElementById("return-up");

function changeCss() {
    if(this.scrollY > 100){
        up.style.display = "block";
        up.style.animation = "appear 0.5s";
        if(innerWidth > 750){
            nav.style.background = "rgba(9, 9, 39)";
            nav.style.transition = "background 0.6s";
        }
        else{
            nav.style.background = "none";
        }
    }
    else{
        nav.style.background = "none";
        up.style.display = "none";
    }
  }

  window.addEventListener("scroll", changeCss , false);