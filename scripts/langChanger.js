/*const lang = navigator.userLanguage || navigator.language || 'en-EN';
const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
changeLanguage(startLang);*/

/*   default language = eng    */
var eng = "english";
var ita = "italian";

var txt = document.getElementsByClassName("lang-txt");
var ittxt = txt.item(0);
var entxt = txt.item(1);
var img = document.getElementsByClassName("lang-img")
var itimg = img.item(0);
var enimg = img.item(1);
var rubiks = document.getElementsByClassName("rubik");
var usrubik = rubiks.item(0);
var itrubik = rubiks.item(1);

/* set default  */
changeLanguage(eng);

function changeLanguage(language){
    var textlistadd = document.getElementsByClassName(language);
    var textlistremove;
    
    if(language == ita){
        ittxt.classList.remove("display")
        itimg.classList.remove("display")
        usrubik.classList.remove("display")
        entxt.classList.add("display")
        enimg.classList.add("display")
        itrubik.classList.add("display")
        textlistremove = document.getElementsByClassName("english")
    }
    else if(language == eng){
        entxt.classList.remove("display")
        enimg.classList.remove("display")
        itrubik.classList.remove("display")
        ittxt.classList.add("display")
        itimg.classList.add("display")
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