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
const navBarMenu = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');




 
const sections = ["Section 1", "Section 2", "Section 3", "Section 4"]
for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    const navListItem = document.createElement("li");
    navListItem.innerHTML = section;
    document.getElementById('navbar__list').appendChild(navListItem);

    //console.log(sections);
    
}
//addToNav(sections);



// function addToNav() {
//     for (section of sectionAll) {
//    const newListItem = document.createElement('li');
//    newListItem.innerHTML = `<a href="#${section.id}" class = "menu__link"> ${section.dataset.nav}</a>`;
//     }
// };





//button
//<a href="#"></a>


//creates a new link element (used in refine video 12)
const navLink = document.createElement('a');
    
//set the link text and URL
navLink.textContent = 'Section 1';
navLink.setAttribute('href', '#section1');

//add the new link to the body of the document
document.body.append(navLink);


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



// build out the nav bar //worked
// const navMenu = document.getElementsByClassName('.navbar__menu');
// navMenu.style.height = '50px';

// //--makes nav list section 1 //worked in console
// const navList = document.getElementById('#navbar__list');
// const navList = document.createElement('li');
// navList.innerHTML = '<strong> Section 1 <strong>';
// navList.textContent = 'Section 1';

// list.append(listItem)


//make list items (do not add to HTML)
{/* <ul id="navbar__list">
    <li><a class="menu__link" href="#section1">Section 1</a></li>
    <li><a class="menu__link" href="#section2">Section 2</a></li>
    <li><a class="menu__link" href="#section3">Section 3</a></li>
    <li><a class="menu__link" href="#section4">Section 4</a></li>
</ul>

//--test navigation buttons
const navListItems = [
    {href: "data-nav=Section1", text: 'Section 1'}
    {href: "data-nav=Section2", text: 'Section 2'}
    {href: "data-nav=Section3", text: 'Section 3'}
    {href: "data-nav=Section4", text: 'Section 4'}
]; */}

// build out the nav bar //worked
//document.getElementsByClassName('.navbar__menu');
//const navMenu = $0;
//--navMenu.style.height = '50px';

//--makes nav list section 1 //worked in console
// document.getElementById('navbar__list');
// const navList = $0;
// const navList = document.createElement('li');
// navList.innerHTML = '<strong> Section 1 <strong>';
// navList.textContent = 'Section 1';

// list.append(listItem)

// const navListItems = [
//     {href=: "#"data-nav=Section1", text: 'Section 1'},
//     {href: "data-nav=Section2", text: 'Section 2'},
//     {href: "data-nav=Section3", text: 'Section 3'},
//     {href: "data-nav=Section4", text: 'Section 4'}
// ];

//     <li><a href="#">Section 1</a></li>
//     <li><a href="#">Section 2</a></li>
//     <li><a href="#">Section 31</a></li>
//     <li><a href="#">Section 4</a></li>








//--applied changes to console worked
// const navList = document.getElementById('#navbar__list');
// navList.style.color = 'black';
// navList.style.height = '50px';
// navList.style.fontSize = '2em';
// navList.style.padding = '10px';



//--did not work
// const navList = document.querySelector('navbar__list');
// navList.style.cssText = 'color: black; height: 50px; font-size: 2em; padding: 10px';




// Add class 'active' to section when near top of viewport
//--Tip: detect the element location relatice to the viewport using .getBoundingClientRect()
// function makeActive(){
//     for (cons section of sections) {
//         const box = section.getBoundingClientRect();
//         //Find a value that works best, but 150 seems to be a good start.
//         if (box.top <= VALUE && box.bottom >= VALUE) {
//         //apply active state on current section and corresponding Nav link
//         } else {
//         //Remove active state from other section and corresponding Nav link
//         }
//      }
// }

// call makeActive() function whenever the user scrolls the page***



// Scroll to anchor ID using scrollTO event
// scroll()
// scrollBy()
// scrollIntoView()
// are acceptable


/*
 * End Main Functions
 * Begin Events
 * 
*/


//--test event listener code
// document.addEventListener('click', function() {
//     // select the element
//     const sectionTabs = document.querySelector('navbar__list');
    
//     // change its background color to red
//   	sectionTabs.style.backgroundColor = 'red';
// })

// //--use prevent default()
// //test
// submit.addEventListener(“click”, function(event){
// let value = textArea.value;
// let li = document.createElement(“li”);
// li.textContent = value;
// ul.appendChild(li);
// event.preventDefault();
// });


//--test listener
// document.addEventListener('click', function () {
//     //-- select the element
//     //const navList = document.querySelector('navList');
    
//     //-- change its background color to red
//   //	navList.style.backgroundColor = 'red';
//     const navList = document.querySelector('li');

//     navList.style.backgroundColor = 'red';
// })

//document.preventDefault()




// Build menu 

// Scroll to section on link click

// Set sections as active
// Make sections active document.addEventListener("scroll", function() { makeActive();});***

//--*Set CSS class active state when the element is in the viewport.
//--*Hint: see this* <a href="https://knowledge.udacity.com/questions/85408" target="_blank">*Knowledge post*</a> *to implement this functionality.*

//--<br data-md>

//--update readme
