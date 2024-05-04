const toggeleBtn = document.querySelector(".toggel-btn");
const toggeleIcon = document.querySelector(".toggle-btn i");
const dropdownMenue = document.querySelector(".dropdown");
toggeleBtn.onclick = function () {
    dropdownMenue.classList.toggle('open');
    const isOpen = dropdownMenue.classList.contains('open');
    toggeleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
// my project

let seeMoreBtn = document.querySelector('.seemore');
let currentItem = 3;

seeMoreBtn.onclick = function() {
let boxes = [...document.querySelectorAll('.container .row .col')];
for (var i = currentItem; i < currentItem + 3; i++){
    boxes[i].style.display = 'inline-block';
}
currentItem += 3;

if(currentItem >= boxes.length){
    seeMoreBtn.style.display = 'none';
    
}
}
// -------about me----------
var tablinks = document.querySelectorAll(".tab-links");
console.log("y");
console.log(tablinks);
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tab of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-link");
}