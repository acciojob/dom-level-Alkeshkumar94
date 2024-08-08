// Get the target element by its ID
const targetElement = document.getElementById("level");

// Initialize the level count
let level = 0;

// Traverse up the DOM tree and count the levels
let currentElement = targetElement;
while (currentElement) {
  level++;
  currentElement = currentElement.parentElement;
}

// Display the result using alert()
alert(`The level of the element is: ${level}`);
