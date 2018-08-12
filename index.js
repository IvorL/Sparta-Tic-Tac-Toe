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
        this.getElementsByTagName('div')[0].className = "dot";
      }

    checkWin();
  }


  // Each win condition is an array of three elements corresponding to winning positions on the board
  var winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];

  function checkWin() {
    // Loop through the array of winning conditions
    for (var i = 0; i < winArray.length; i++) {
      // stores the name of the class for each box
      var values = [];
      // Loop through win positions
      for (var j = 0; j < winArray[i].length; j++) {
        // Store the value of class name for each box in the 'values' array, using the win positions to acces the correct box position
        values.push(buttons[(winArray[i])[j]].getElementsByTagName('div')[0].className);
      }
      // counter increases if the position of a dot or square matches a win position (total needed is 3)
      // values will reset for every win condition fully checked
      var checkPassedCounterDot = 0;
      var checkPassedCounterSquare = 0;
      // Loop through the 'values' array
      for (var index = 0; index < values.length; index++) {
        // Stores the number of checks that have passed for a particular win condition (3 needed to win)
        // If the class name is correct, a check is passed
        if (values[index] == "dot")
          checkPassedCounterDot++;
        else if (values[index] == "square")
          checkPassedCounterSquare++;
      }
      if (checkPassedCounterDot == 3 || checkPassedCounterSquare == 3) {
        console.log('You win!');
        break;
      }
    }
  } // end of checkWin()


}); // end of DOMContentLoaded event listener
