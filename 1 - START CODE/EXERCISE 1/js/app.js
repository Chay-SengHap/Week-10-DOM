// const { createElement } = require("react");

let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
// 1
// const item3 = document.getElementById("container1").children[2];
// container2.append(item3);
// 2
const items = document.querySelectorAll("#container1 >*");
container2.append(items[2]);

//  2- Remove item 4
// YOUR CODE !!
const itemsContainer2 = document.querySelectorAll("#container2 > *");
itemsContainer2[0].remove();

   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
const item10 = document.createElement("div");
item10.textContent = "10";
item10.className = "item";
container3.append(item10);



//  4- Set all items located in a blue container to red
// YOUR CODE !!
document.getElementById("container1").style.color = "red";
document.getElementById("container3").style.color = "red";

