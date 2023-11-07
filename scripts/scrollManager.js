var body = document.querySelector("body");
var nav = document.getElementById("navbar");
var up = document.getElementById("return-up");

function changeCss() {
    if(this.scrollY > 100){
        up.style.display = "block";
        up.style.animation = "appear 0.5s";
        if(innerWidth > 750){
            nav.style.background = "rgba(5, 9, 39, 0.782)";
            nav.style.transition = "background 0.5s";
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