var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*function hobbylinker(hobbyid){
    var hobby = document.getElementById(hobbyid);
    document.getElementById('about').scrollIntoView()
    opentab('hobbies')
    setTimeout(function(){
        hobby.style.add("active-hobby");
    }, 400)
    setTimeout(function(){
        hobby.style.remove("active-hobby");
    }, 1200)
}*/