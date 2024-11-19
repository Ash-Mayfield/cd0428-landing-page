/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//global variables
//navbar 
const navBarMenu = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
//sections
const sections = document.querySelectorAll('section');
const anchor = document.querySelectorAll('.navbar__menu a');



// good code works to build nav menu-needs to be linked displays in console 4 times though
//  const sections = ["Section 1", "Section 2", "Section 3", "Section 4"]
//  for (let i = 0; i < sections.length; i++) {
//       let section = sections[i];
//      const navListItem = document.createElement("li");
//      navListItem.innerHTML = `<a href="#${section}" class = "menu__link"> ${section}</a>`;
//      document.getElementById('navbar__list').appendChild(navListItem);
 
//      //console.log(sections);
     
//  };


//Max suggested loop rather than array 
//code works and links finally work
function addToNav() {
    let navListItem = '';
    //for each loop of sections with link
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navListItem += `<li><a href="#${section.id}" class = "menu__link"> ${sectionDataNav}</a></li>`  
    });
    //append elements to nav
    navBarList.innerHTML = navListItem;
    //console.log(sections);
};
      
addToNav();




//button
//<a href="#"></a>
//creates a new link element (used in refine video 12)
// const navLink = document.createElement('a');
    
// //set the link text and URL
// navLink.textContent = 'Section';
// navLink.setAttribute('href', '#section');

// //add the new link to the body of the document
// document.body.append(navLink);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Add class 'active' to section when near top of viewport
//--Tip: detect the element location relative to the viewport using .getBoundingClientRect()
// function makeActive() {
//     for (let section of sections) {
//         const box = section.getBoundingClientRect();
//         //Find a value that works best, but 150 seems to be a good start.
//         if (box.top <= VALUE && box.bottom >= VALUE) {
//         //apply active state on current section and corresponding Nav link
//         } else {
//         //Remove active state from other section and corresponding Nav link
//         }
//      }
     
// };


//makeActive();
// call makeActive() function whenever the user scrolls the page***

//get box value 
function position(section) {
    return Math.floor(section.getBoundingClientRect().top);
};
//remove active section
function removeActive(section) {
     section.classList.remove('active-section');    
};
//add active section
function addActive(conditional, section) {
    if(conditional) {
        section.classList.add('active-section');
    };
};

window.addEventListener('scroll', makeActive);


//scrolls without this not sure where to add this 
// Scroll to anchor ID using scrollTO event
// scroll()
// scrollBy()
// scrollIntoView()
// are acceptable


//scroll to element test
//const element = document.getElementById("someElement");

//jquery instant/smooth  start/nearest test
//element.scrollIntoView({behavior:"smooth", block: "end", inline: "start"});


/*
 * End Main Functions
 * Begin Events
 * 
*/



//not sure where to use this
//--use prevent default()
//document.preventDefault()



// Scroll to section on link click
// Set sections as active

//function to call
function makeActive() {
    //go through sections
    sections.forEach(section => {
        const elementOffset = position(section);
        //if in view
        inview = () => elementOffset < 150 && elementOffset >= -150;
        //add and remove active 
        removeActive(section);
        addActive(inview(),section);
     });
};
makeActive()




// navListItem.addEventListener("click", (toSec) => { 
//     toSec.preventDefault();
//     if(toSec.target.dataset.nav) {
//         document
//         .getElementById('${toSec.target.dataset.nav}')
//         .scrollIntoView({ behavior: "smooth"});
//         setTimeout(() => {
//             location.hash = '${toSec.target.dataset.nav}';
//         }, 170);
//     }
// });



//     ({behavior:"smooth", block: "end", inline: "start"});
//     makeActive();
//     document.preventDefault();


//--*Set CSS class active state when the element is in the viewport.
//--*Hint: see this* <a href="https://knowledge.udacity.com/questions/85408" target="_blank">*Knowledge post*</a> *to implement this functionality.*



