var seemorelist = document.getElementsByClassName("see-more");
var seemorebtn = document.getElementsByClassName("see-more-btn").item(0);
var seelessbtn = document.getElementsByClassName("see-less-btn").item(0);

function seemore(){
    for(seemoreitem of seemorelist){
        seemoreitem.classList.add("display")
    }
    seemorebtn.classList.remove("display")
    seelessbtn.classList.add("display")
}

function seeless(){
    for(seemoreitem of seemorelist){
        seemoreitem.classList.remove("display")
    }
    seemorebtn.classList.add("display")
    seelessbtn.classList.remove("display")
}