// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let tries = 0;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
  passwordInput.value = "";
  show(passwordView);
  hide(lostView);
  hide(wonView);
   instructionLabel.textContent = "Enter your code (You can try 3 times only !)";
  

}

function showWin() {
  // You can use this function to dispaly the Win View
  if(passwordInput.value == SECRET_CODE){
    show(wonView);
    hide(lostView)
    hide(passwordView);
  }
}
function showLost() {
    // You can use this function to dispaly the Lost View
    if(passwordInput.value != SECRET_CODE){
    show(lostView);
    hide(wonView);
    hide(passwordView);

  }
 
}

 
function handleCheck() {
     // Manage your logic when the button is pressed
    let userCode = passwordInput.value;
    tries++;

    if (userCode == SECRET_CODE){
      showWin();
      return;
    }

    if(tries >= 3){
      tries = 0;
      showLost();
    }
   
      instructionLabel.textContent = `code is wrong! you have remaining ${3 - tries} tries`;


   
passwordInput.value = "";

     
}

// MAIN   ---------------------------------------------------------

 showGame();