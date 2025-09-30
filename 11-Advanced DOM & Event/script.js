//what is the DOM : DOM is an interface connecting js with browser
//How the DOM API is organized behind the scenes
//node in the DOM is represented by a js object.
//node method and property : textContent, childNodes, parentNode, cloneNode
//Node Types : Document --> document object, Element --> <div> html div object, Text --> text inside elements, Comment --> comment object

// //selecting, creating, & deleting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// //old methods: 
// /**
//  * document.getElementById('IdName');
//  * document.getElementByClassName('className');
//  * document.getElementByTagName('div');
//  */
// //Modern method
// /**
//  * document.querySelector('ClassName');
//  * document.querySelectorAll('p');
//  */

// //creating & inserting elements
// // insertAdjacentHTML
// const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cooki-message');
// message.innerHTML = 'Heyy Guyss...!. <button>Submit</button>'

// header.prepend(message);
// header.append(message)

// //append() & prepend() as tools for moving or inserting nodes inside a parent element
// //cloneNode(): makes copy of a DOM node
// //eg
// const box = document.querySelector('#box');
// const para = document.createElement('p');
// para.textContent = "I' m new here";

// // box.prepend(para); // insert start
// // box.append(para.cloneNode(true)); // insert end, clone node : repeat
// box.before(para);
// // box.after(para);

// //styles, attributes and classes
// //style
// para.style.backgroundColor = '#37383d';
// para.style.width = '120%';

// console.log(para.style.height);
// console.log(para.style.backgroundColor);

// console.log(getComputedStyle(para).color);
// console.log(getComputedStyle(para).height);

// message.style.height = Number.parseInt(getComputedStyle(para).height,10)+ 40 + 'px';

// //attributes
// const link = document.getElementById('link');

// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('target'));

// //data attribute
// const box1 = document.getElementById('box1');

// console.log(box1.dataset.user);
// console.log(box1.dataset.level);

//Classes
// box.classList.add(); // add a class
// box.classList.remove(); // removing a class
// box.classList.toggle(); // add the class if missing removes it is present
// box.classList.contains(); // existance test true or false

/*
//
console.log(document.body);
const allSections = document.querySelectorAll('.section');
console.log(allSections.length);

//
const section = document.getElementById('section--1');
section.style.backgroundColor = 'lightblue';
const allButton = document.getElementsByTagName('button');
console.log(allButton[0]);

//
const para = document.querySelector('p');
console.log(para.textContent);

//
const box = document.getElementById('box');
const createEl = document.createElement('div');
createEl.classList.add('header');
createEl.innerHTML = 'Hello World!...';

box.prepend(createEl);
box.append(createEl.cloneNode(true));

*/
//getBoundingClientReact(): method return a DOMReact provide information about the size of an element and it's possition relative to viewport , includes property such as top, left, right, bottom, width, and height

//Type of Events & Event Handler------
//Types of Event
//Mouse Events
/**
 * click - single click
 * dbclick - double click
 * mousedown - button pressed
 * mouseup - button released
 * mouseover - pointer enters element 
 * mouseout - pointer leaves element
 * mouseenter / mouseleave - enter / leave
 * mousemove - pointer moves inside element
 */
const btn = document.getElementById('btn');
//1-click
// btn.addEventListener('click',() => {
//   console.log('Button clicked!');
// });

// //2-dbclick
// btn.addEventListener("dblclick",() => {
//   console.log('Button double-clicked!')
// });
// //3-mousedown & mouseup
// btn.addEventListener("mousedown", () => {
//   console.log("mouse button pressed");
// });
// btn.addEventListener("mouseup", () =>{
//   console.log("mouse button released");
// });
// //4-mousemove
// document.addEventListener("mousemove", (e) =>{
//   console.log("mouse at:", e.clientX,e.clientY);
// });

//5-mouseover & mouseenter : 
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('mouseover', () => console.log('parent mouseover')); // Bubbles (event goes through DOM tree)
child.addEventListener('mouseover', () => console.log('child mouseover')); // not Bubbles 

//keyboard event---
//keydown - key is pressed down
const input = document.getElementById('inputField');

input.addEventListener('keydown', (event) =>{
  console.log('key pressed:', event.key);
   console.log('key code:', event.code);
});
//keyup - key is released
input.addEventListener('keyup', (event) => {
  console.log('key released:', event.key);
});
//keypress - use keydown and keyup
input.addEventListener('keypress', (event) => {
  console.log('key char pressed:', event.key);
});

//Bubbling & capturing----
//3 phases for DOM tree
/*
 * 1-capturing phase :
 * event start from window-> document -> html -> body -> ... - >target element 
 * 2-target phase
 * the event reched the actual element
 * 3-Bubbling
 * after reching target the bubbles up back through the DOM
*/
//scroll navigation 
//firstly we want to know the position relative viewport so use getBoundingClientReact()

// window.addEventListener('scroll', function(e){
//   console.log(window.scrollY)
// })

//sticky navigation: Intersection Observer API 
//-----------------------------------------------
//we want to get parent from child
// let txt = document.querySelector('.text');
// console.log(txt.parentNode);

//parent to child 
const textParent = document.querySelector("#title");
console.log(textParent.firstElementChild);
console.log(textParent.lastElementChild);
console.log(textParent.childNodes); // get all child
//presviou element: previousElementSibiling

//manipulating element
const div = document.createElement('div');
div.innerHTML = "<p>Welcome to Hello world</p>";
document.body.appendChild(div)
console.log(div);

//we want to create contact
const menu = document.getElementById('menu');

const contact = document.createElement('li');
contact.innerHTML = "  Contact"
menu.appendChild(contact);
console.log(menu.textContent);

//attribute methods
// console.log(input.attributes);
console.log(input.getAttribute('type'));

//setAtrribute
input.setAttribute('class', 'user')
console.log(input)// extra class

//hasAttribute
console.log(input.hasAttribute('class')); // true

//removeAtrribute
input.removeAttribute('placeholder')
console.log(input);

//getComputerStyle(): clg(window.getComputerStyle(inputBox).width);
//className
const header = document.querySelector('#heading');

// header.className += " new";
// console.log(header);

//classList
header.classList.add('new', 'new2');
console.log(header);

//replace
header.classList.replace('message','msg');
console.log(header);

//toggle
header.classList.toggle('msg');
console.log(header);