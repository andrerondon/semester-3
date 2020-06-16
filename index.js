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

toxicTim.style.border = 'solid medium red'