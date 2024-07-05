/* ---opentab--- */
 
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/* ---curryear--- */
var year=new Date().getFullYear();
document.getElementById("current-year").textContent=year;

/* ---form--- */

const scriptURL = 'https://script.google.com/macros/s/AKfycbw5i9YfWQVoJUcmqqTLTu8OswakJQld3k16QEOK0kaDpvHPH8Gp74elMTvlDL5q9QMJqg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

/* ---openmenu closemenu--- */

var sidemenu=document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.right="0";
}

function closemenu() {
    sidemenu.style.right="-200px";
}
