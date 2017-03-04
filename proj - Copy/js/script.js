/*jslint plusplus: true */

//JSLint is a JavaScript program that looks for problems in JavaScript programs. It is a code quality tool.

//Prima functie. Meniu Stanga

function openNav() {
  "use strict";
  document.getElementById("main-nav").style.width = "250px";
  
}

function closeNav() {
  "use strict";
  document.getElementById("main-nav").style.width = "0";
  
}

// A doua funtie. Meniu Dreapta

function openAccNav() {
  "use strict";
  document.getElementById("account-nav").style.width = "250px";
  
}

function closeAccNav() {
  "use strict";
  document.getElementById("account-nav").style.width = "0";
  
}

//Meniu Accourdion

// Selectarea Linkului cu clasa "sublinks"
var accordion = document.getElementsByClassName("sublinks");
var i; //pentru a nu avea eroarea care spune ca variabila a fost folosita inainte de a fi declarata

for (i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    "use strict";
    this.classList.toggle("active");
    
    var inside = this.nextElementSibling;
    
    if (inside.style.maxHeight) {
      inside.style.maxHeight = null;
    } else {
      inside.style.maxHeight = inside.scrollHeight + "px";
    }
  };
}