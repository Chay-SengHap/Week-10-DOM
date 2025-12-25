const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() { 
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  const container = document.querySelector(".container");

 
  
  // 1 - Random color for card
  const color = randomColor();   
   
  // create card
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.style.backgroundColor = color;

  // 2 - Set card text
  const cardText = document.createElement("p");
  cardText.textContent = `new ${color} card`;

  
  // 3 - Set card footer
  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
   

  //  4 - Manage footer button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove";
  removeBtn.textContent = "remove";
  removeBtn.style.borderRadius = "10px";

  removeBtn.addEventListener("click", ()=>{
    newCard.remove();
  });
   
   

  // 5 - Add card to containers
  container.appendChild(newCard);
  newCard.appendChild(cardText);
  newCard.appendChild(cardFooter);
  cardFooter.appendChild(removeBtn);
  
 
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.getElementById("create");
btnCreate.addEventListener("click", createCard);