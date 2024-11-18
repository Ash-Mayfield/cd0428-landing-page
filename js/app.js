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
const navBarMenu = document.querySelector('navbar__menu');
const navBarList = document.getElementById('navbar__list');
//sections
const sections = document.querySelectorAll('section');
const anchor = document.querySelector('a');



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
const addToNav = () => {
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

//get value 
const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
};

//remove active section
const removeActive = (section) => {
     section.classList.remove('active-section');
};

//add active section
const addActive = (conditional, section) => {
    if(conditional) {
        section.classList.remove('active-section');
    };
};

//function
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
        
     });
     
};

window.addEventListener('scroll',sectionActivation);
  



// Scroll to anchor ID using scrollTO event
// scroll()
// scrollBy()
// scrollIntoView()
// are acceptable



//scroll to element test
//const element = document.getElementById("someElement");

//jquery instant/smooth  start/nearest test
//element.scrollIntoView({behavior:"smooth", block: "end", inline: "start"});



//scroll to element test
// $(document).ready(() => {
//     $('#section').click(() => {
//       $('html, body').animate({
//         'scrollTop': $('#section').offset().top
//     }, 1500);
//   });
// });



//active section test code
// const activeSection = document.querySelectorAll("active-section");
// activeSection.scrollIntoView({behavior: "smooth", block: "start"});
// activeSection.addEventListener("click", () => {
// });


/*
 * End Main Functions
 * Begin Events
 * 
*/



// //--test listener turns menu buttons color
// document.addEventListener('click', function() {
//     //-- select the element
//     document.querySelector('navList');
    
//     //-- change its background color
//     const navList = document.querySelectorAll('li');
//     navList.style.backgroundColor = 'orange';
// })


//--use prevent default()
//document.preventDefault()




// window.addEventListener('scroll', function(event) {
//     event.preventDefault();

//        console.log('button clicked');
// });



// Build menu 

// Scroll to section on link click

// Set sections as active
// Make sections active 
// document.addEventListener("scroll", function() { 
//     makeActive();
// });

//--*Set CSS class active state when the element is in the viewport.
//--*Hint: see this* <a href="https://knowledge.udacity.com/questions/85408" target="_blank">*Knowledge post*</a> *to implement this functionality.*

//--<br data-md>

//--update readme
