// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

const displayTasks = (taskList)=>{
  const listContainer = document.getElementById("taskList");

  listContainer.innerHTML = "";

  taskList.forEach( (task) => {
    const li = document.createElement("li");
    li.textContent = task.description;

    if (task.priority === 1){
      li.style.color = "red";
    }
    else{
      li.style.color = "gray";
    }

    listContainer.appendChild(li);
  });
}


function addItem() {
  // 1- Create a new task
  // TODO
  const priorityInput = document.getElementById("priority");
  const decInput = document.getElementById("description");


  //  2- Set the description from the text field
  // TODO
  const description = decInput.value;
  
  // 3- Set the priority from select field
  // TODO
  const priority = priorityInput.value === "High" ? 1 : 0;

  // 4- Add the new object to the array
  // TODO
  const newTask = {
    description : description,
    priority : priority

  }

  tasks.push(newTask);

  display(tasks);

  decInput.value = "";
}

function showImportant() {
  const filtered = tasks.filter(task => task.priority === 1);
  displayTasks(filtered);
}

function showNotImportant() {
  const filtered = tasks.filter(task => task.priority === 0);
  displayTasks(filtered);
}

function showAll() {
  displayTasks(tasks);
}
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
document.getElementById("btnHigh").addEventListener("click", showImportant);
document.getElementById("btnLow").addEventListener("click", showNotImportant);
document.getElementById("btnAll").addEventListener("click", showAll);
