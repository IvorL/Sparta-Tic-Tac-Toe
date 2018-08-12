// Add event listener that waits for the DOM content to load
// before executing javascript
// This will 'wrap' the javascript code
document.addEventListener("DOMContentLoaded", function() {

// Select button elements
// This will be an array
var buttons = document.getElementsByTagName('button')

// Create an event listener for each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeElementStyle);
}
// changes the element style in order to 'place' as square or a dot in the box
function changeElementStyle() {
  document.getElementById('innerStyle').className = "dot";
}


}); // end of DOMContentLoaded event listener
