/*const lang = navigator.userLanguage || navigator.language || 'en-EN';
const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
changeLanguage(startLang);*/

var defaultlang = document.getElementsByClassName("english");
for(text of defaultlang){
    text.classList.add("display")
}

var itbtn = document.getElementsByClassName("lang-txt-it").item(0);
var enbtn = document.getElementsByClassName("lang-txt-en").item(0);
var rubiks = document.getElementsByClassName("rubik");
var usrubik = rubiks.item(0);
var itrubik = rubiks.item(1);

function changeLanguage(language){
    var textlistadd = document.getElementsByClassName(language);
    var textlistremove;
    
    if(language == "italian"){
        itbtn.classList.remove("display")
        usrubik.classList.remove("display")
        enbtn.classList.add("display")
        itrubik.classList.add("display")
        textlistremove = document.getElementsByClassName("english")
    }
    else if(language == "english"){
        enbtn.classList.remove("display")
        itrubik.classList.remove("display")
        itbtn.classList.add("display")
        usrubik.classList.add("display")
        textlistremove = document.getElementsByClassName("italian")
    }

    for(text of textlistadd){
        text.classList.add("display")
    }
    for(text of textlistremove){
        text.classList.remove("display")
    }
}