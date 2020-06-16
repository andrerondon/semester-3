console.log('Index.js loaded...')

// To select a node use the methods <node>.querySelector(string);

const toxicTim = document.querySelector('#toxic-tim');
// or
// You can also use the methods <node>.getElementById(string);
const bumbleBertha = document.getElementById('bumble-bertha')


// To select multiple nodes usee the mthod <node>.querySelectorAll(string);

const allDoggos = document.querySelectorAll('.doggo');
// or
// You can also use the methods <node>.getElementsByClassName(string);
const allDoggos_2 = document.getElementsByClassName('doggo');

// to loop through a HTMLCollection (returned by getElementsByClassName) use a for loop

if (false) {
  for (let node of allDoggos_2) {
    console.log(node);
  }
}

// to loop over a NodeList there is a forEach method available
if (false) {
  allDoggos.forEach(node => console.log(node));
}

// Navigating between nodes
// Every DOM node has methods like nextElementSibling, previousElementSibling that allow us to navigate the DOM tree

toxicTim.nextElementSibling // returns Bumble Bertha
toxicTim.previousElementSibling // returns null

// the matches method
toxicTim.matches('#toxic-tim') // true
toxicTim.matches('a') // false


// Manipulation
// The <node>.style property will return all the inline-styles of a node.

toxicTim.style.border = 'solid medium red'

// If you want to get the computed values of a css property use the global method getComputedStyle(<node>) passing  in the node you want styles for

getComputedStyle(toxicTim).height // '200px'


// Manipulating IDs and Classes

toxicTim.id // returns the ids
// toxicTim.id = 'new-id' // overwrite the id

// <node>.className will return the classes of a node

toxicTim.className // returns 'figher doggo'

// <node>.classList will return a object that has methods to add or remove classes from the class list of a node

toxicTim.classList.remove('doggo') // removes doggo from className
toxicTim.classList.add('doggo') // add dogoo to className


// to get Attributes of a node
// getAttribute, setAttribute, hasAttribute, removeAttribute
toxicTim.getAttribute('id'); // 'toxic-tim'

// Remove an element

// <node>.remove()

// Creating Nodes

const drillBitDarel = document.createElement('div');
drillBitDarel.className = 'doggo fighter';
drillBitDarel.id = 'drill-bit-darel';
drillBitDarel.style.backgroundImage = `url(images/drill-bit-darel.jpg)`;

// Drill bit darel is created but not attached to the DOM yet...

// Adding Nodes to the DOM

// <node>.appendChild(<node>)

const roster = document.querySelector('.team.salmon')