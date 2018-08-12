// Add event listener that waits for the DOM content to load
// before executing javascript
// This will 'wrap' the javascript code
document.addEventListener("DOMContentLoaded", function() {

  // variable to store the number of clicks
  var clickTotal = 0;

  // Select button elements
  // This will be an array
  var buttons = document.getElementsByTagName('button')

  // Create an event listener for each button in the buttons array
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeElementStyle);
  }

  // changes the element style in order to 'place' a square or a dot in the box
  function changeElementStyle() {
    clickTotal++;
    // For even clicks, place a square in the box
    if (clickTotal % 2 == 0) {
    // select the 'div' element inside the button and change the class name to alter styling.
    // 'this' is a reference to the button that has been clicked on
      this.getElementsByTagName('div')[0].className = "square";
    } else {
        this.getElementsByTagName('div')[0].className = "dot"
      }
  }

  // Win conditions:


}); // end of DOMContentLoaded event listener
