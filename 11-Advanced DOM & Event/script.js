//what is the DOM : DOM is an interface connecting js with browser
//How the DOM API is organized behind the scenes
//node in the DOM is represented by a js object.
//node method and property : textContent, childNodes, parentNode, cloneNode
//Node Types : Document --> document object, Element --> <div> html div object, Text --> text inside elements, Comment --> comment object

//selecting, creating, & deleting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//old methods: 
/**
 * document.getElementById('IdName');
 * document.getElementByClassName('className');
 * document.getElementByTagName('div');
 */
//Modern method
/**
 * document.querySelector('ClassName');
 * document.querySelectorAll('p');
 */

//creating & inserting elements
// insertAdjacentHTML
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cooki-message');
message.innerHTML = 'Heyy Guyss...!. <button>Submit</button>'

header.prepend(message);
header.append(message)

//append() & prepend() as tools for moving or inserting nodes inside a parent element
//cloneNode(): makes copy of a DOM node
//eg
const box = document.querySelector('#box');
const para = document.createElement('p');
para.textContent = "I' m new here";

// box.prepend(para); // insert start
// box.append(para.cloneNode(true)); // insert end, clone node : repeat
box.before(para);
// box.after(para);

//styles, attributes and classes
//style
para.style.backgroundColor = '#37383d';
para.style.width = '120%';

console.log(para.style.height);
console.log(para.style.backgroundColor);

console.log(getComputedStyle(para).color);
console.log(getComputedStyle(para).height);

message.style.height = Number.parseInt(getComputedStyle(para).height,10)+ 40 + 'px';

//attributes
const link = document.getElementById('link');

console.log(link.getAttribute('href'));
console.log(link.getAttribute('target'));

//data attribute
const box1 = document.getElementById('box1');

console.log(box1.dataset.user);
console.log(box1.dataset.level);

//Classes
box.classList.add(); // add a class
box.classList.remove(); // removing a class
box.classList.toggle(); // add the class if missing removes it is present
box.classList.contains(); // existance test true or false

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