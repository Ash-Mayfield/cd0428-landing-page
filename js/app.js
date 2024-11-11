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

//--global variables??
const navbar__menu = navMenu
const navbar__list =  navList




    
const sections = ["Section 1", "Section 2", "Section 3", "Section 4"]
for (let i=0; i < sections.length; i++) {
    let section = sections[i];
    let ul = document.createElement('ul');
    ul.innerHTML = section;
    document.getElementById('navbar__list').appendChild(ul);
}
   //-- console.log(sections);





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

// build the nav
document.getElementsByClassName('.navbar__menu');
const navMenu = $0;
navMenu.style.height = '50px';
document.getElementsById('navbar__list');
const navList = $0;

/*
//make list items (do not add to HTML)
<ul id="navbar__list">
    <li><a class="menu__link" href="#section1">Section 1</a></li>
    <li><a class="menu__link" href="#section2">Section 2</a></li>
    <li><a class="menu__link" href="#section3">Section 3</a></li>
    <li><a class="menu__link" href="#section4">Section 4</a></li>
</ul>






const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

// Add class 'active' to section when near top of viewport

//Tip: detect the element location relatice to the viewport using .getBoundingClientRect()
function makeActive(){
    for (cons section of sections) {
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= VALUE && box.bottom >= VALUE) {
        //apply active state on current section and corresponding Nav link
        } else {
        //Remove active state from other section and corresponding Nav link
        }
     }
}

call makeActive() function whenever the user scrolls the page***



// Scroll to anchor ID using scrollTO event
scroll()
scrollBy()
scrollIntoView()
are acceptable
/**
 * End Main Functions
 * Begin Events
 * 
*/
//--test event listener code

document.addEventListener('click', function() {
    // select the element
    const sectionTabs = document.querySelector('navbar__list');
    
    // change its background color to red
  	sectionTabs.style.backgroundColor = 'red';
})

use prevent default()

// Build menu 

// Scroll to section on link click

// Set sections as active
// Make sections active document.addEventListener("scroll", function() { makeActive();});***
* Set CSS class active state when the element is in the viewport.
* *Hint: see this* <a href="https://knowledge.udacity.com/questions/85408" target="_blank">*Knowledge post*</a> *to implement this functionality.*

<br data-md>

update readme